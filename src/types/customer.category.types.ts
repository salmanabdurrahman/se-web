import { Prisma } from "@prisma/client";

export type CustomerCategoryWithRelations = Prisma.CategoryGetPayload<{
  include: {
    _count: {
      select: {
        products: true;
      };
    };
  };
}>;
