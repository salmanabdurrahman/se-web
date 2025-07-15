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
