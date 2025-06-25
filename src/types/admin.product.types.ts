import { Prisma } from "@prisma/client";

export type ProductWithRelations = Prisma.ProductGetPayload<{
  include: {
    category: {
      select: {
        name: true;
      };
    };
    brand: {
      select: {
        name: true;
      };
    };
    _count: {
      select: {
        orders: true;
      };
    };
  };
}>;
