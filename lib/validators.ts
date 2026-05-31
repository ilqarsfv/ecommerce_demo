import { z } from "zod";

export const insertProductSchema = z.object({
  name: z.string().min(3, "Product name must be at least 3 characters long"),
  slug: z.string().min(3, "Slug must be at least 3 characters long"),
  category: z.string().min(3, "Category must be at least 3 characters long"),
  brand: z.string().min(3, "Brand must be at least 3 characters long"),
  description: z.string().min(3, "Description must be at least 3 characters long"),
  price: z.string().regex(/^\d+(\.\d+)?$/, "Price must be a valid number"),
  stock: z.coerce.number().positive("Stock must be a positive number"),
  isFeatured: z.boolean(),
  images: z.array(z.string()).min(1, "Product must have at least one image"),
  banner: z.string().optional(),
  rating: z.string().min(1, "Rating must be at least 1 character long"),
  numReviews: z.number(),
});
