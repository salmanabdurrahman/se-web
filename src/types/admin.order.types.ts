import { Prisma } from "@prisma/client";

export type OrderWithRelations = Prisma.OrderGetPayload<{
  include: {
    detail: {
      select: {
        name: true;
        city: true;
      };
    };
    products: {
      select: {
        product: {
          select: {
            id: true;
            name: true;
            images: true;
          };
        };
      };
    };
  };
}>;
