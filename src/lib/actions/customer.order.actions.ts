"use server";

import prisma from "../prisma";
import { validateRequest } from "../auth";
import xenditClient from "../xendit";
import { convertUSDToIDR, generateRandomString } from "../utils";
import { CartItem } from "@/stores/cart-store";
import { xenditRedirectUrl } from "@/constants/app-config";
import { PaymentRequestParameters, PaymentRequest } from "xendit-node/payment_request/models";
import { customerOrderSchema, FormState } from "@/types/customer.order.types";

export async function createOrder(items: CartItem[], previousState: FormState, formData: FormData): Promise<FormState> {
  const { session, user } = await validateRequest();
  if (!session) {
    return {
      message: "You must be logged in to place an order.",
      success: false,
    };
  }

  if (items.length === 0) {
    return {
      message: "Your cart is empty.",
      success: false,
    };
  }

  const validatedFields = customerOrderSchema.safeParse({
    name: formData.get("name"),
    address: formData.get("address"),
    city: formData.get("city"),
    postalCode: formData.get("postalCode"),
    note: formData.get("note"),
    phone: formData.get("phone"),
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors in the form.",
      success: false,
    };
  }

  try {
    const productIds = items.map(item => item.product.id);
    const productsFromDb = await prisma.product.findMany({
      where: {
        id: {
          in: productIds,
        },
      },
    });

    // get the total price of the order
    let totalPrice = 0;
    for (const item of items) {
      const product = productsFromDb.find(product => product.id === item.product.id);
      if (!product) {
        return {
          message: "One or more products in your cart are no longer available.",
          success: false,
        };
      }

      totalPrice += Number(product.price) * item.quantity;
    }

    const { name, address, city, postalCode, note, phone } = validatedFields.data;

    const order = await prisma.order.create({
      data: {
        code: `ORD-${generateRandomString(16)}`,
        totalPrice,
        status: "pending",
        detail: {
          create: {
            name,
            phone,
            address,
            city,
            postalCode,
            note,
          },
        },
        products: {
          createMany: {
            data: items.map(item => {
              const product = productsFromDb.find(product => product.id === item.product.id);
              if (!product) {
                throw new Error("Product not found in database");
              }

              return {
                subtotal: product.price * BigInt(item.quantity),
                quantity: item.quantity,
                productId: product.id,
              };
            }),
          },
        },
        userId: user.id,
      },
    });

    // create a payment request using Xendit
    const paymentRequestParams: PaymentRequestParameters = {
      amount: await convertUSDToIDR(totalPrice),
      paymentMethod: {
        ewallet: {
          channelProperties: {
            successReturnUrl: xenditRedirectUrl,
          },
          channelCode: "SHOPEEPAY",
        },
        reusability: "ONE_TIME_USE",
        type: "EWALLET",
      },
      currency: "IDR",
      referenceId: order.code,
    };

    const paymentResponse: PaymentRequest = await xenditClient.PaymentRequest.createPaymentRequest({
      data: paymentRequestParams,
    });

    const redirectUrl = paymentResponse.actions?.find(action => action?.action === "AUTH")?.url;
    if (!redirectUrl) {
      return {
        message: "Failed to create payment request. Please try again later.",
        success: false,
      };
    }

    return {
      message: "Order placed successfully! Please complete your payment.",
      success: true,
      redirectUrl,
    };
  } catch (error) {
    console.error("Error creating order:", error);

    return {
      message: "An error occurred while placing your order. Please try again later.",
      success: false,
    };
  }
}
