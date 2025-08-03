import { type NextRequest, NextResponse } from "next/server";
import { OrderStatus } from "@prisma/client";
import prisma from "@/lib/prisma";
import { xenditWebhookToken } from "@/constants/app-config";

export async function POST(request: NextRequest) {
  const callbackToken = request.headers.get("X-CALLBACK-TOKEN");
  if (callbackToken !== xenditWebhookToken) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const eventType = body?.event;
    const { reference_id, status } = body?.data || {};

    if (!reference_id || !status || !eventType) {
      return NextResponse.json({ message: "Invalid request data" }, { status: 400 });
    }

    if (eventType === "payment.succeeded") {
      await prisma.order.update({
        where: {
          code: reference_id,
        },
        data: {
          status: OrderStatus.success,
        },
      });
    } else if (eventType === "payment.failed") {
      await prisma.order.update({
        where: {
          code: reference_id,
        },
        data: {
          status: OrderStatus.failed,
        },
      });
    }

    return NextResponse.json({ message: "Order status updated successfully" }, { status: 200 });
  } catch (reason) {
    console.error("Error updating order status:", reason);

    const message = reason instanceof Error ? reason.message : "Unexpected error occurred";
    return NextResponse.json({ message }, { status: 500 });
  }
}
