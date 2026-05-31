"use server";
import { prisma } from "@/db/prisma";

export async function getLatestProducts(params: { limit?: number }) {
  const { limit } = params;

  return await prisma.product.findMany({
    take: limit,
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function getProductBySlug(slug: string) {
  return await prisma.product.findFirst({
    where: { slug },
  });
}
