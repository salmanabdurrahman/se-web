import { Prisma } from "@prisma/client";

export type CustomerWithRelations = Prisma.UserGetPayload<{
  include: {
    orders: {
      select: {
        detail: {
          select: {
            phone: true;
            city: true;
          };
        };
      };
    };
    _count: {
      select: {
        orders: true;
      };
    };
  };
}>;
