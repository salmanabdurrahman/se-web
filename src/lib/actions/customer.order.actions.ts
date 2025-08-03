"use server";

import prisma from "../prisma";
import { validateRequest } from "../auth";
import { CartItem } from "@/stores/cart-store";
import { customerOrderSchema, FormState } from "@/types/customer.order.types";

export async function createOrder(items: CartItem[], previousState: FormState, formData: FormData): Promise<FormState> {
  const { session } = await validateRequest();
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

    console.log("Creating order with the following details:", {
      userId: session.id,
      items,
      totalPrice,
      ...validatedFields.data,
    });

    return {
      message: "Order placed successfully!",
      success: true,
    };
  } catch (error) {
    console.error("Error creating order:", error);

    return {
      message: "An error occurred while placing your order. Please try again later.",
      success: false,
    };
  }
}
