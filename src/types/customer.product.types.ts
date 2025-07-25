import { Prisma } from "@prisma/client";

export type CustomerProductWithRelations = Prisma.ProductGetPayload<{
  include: {
    category: {
      select: {
        name: true;
      };
    };
  };
}>;

export type CustomerProduct = Prisma.ProductGetPayload<{
  select: {
    id: true;
    name: true;
    description: true;
    price: true;
    images: true;
    category: {
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
