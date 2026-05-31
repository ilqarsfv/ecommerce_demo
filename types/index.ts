import { z } from "zod";
import { insertProductSchema } from "@/lib/validators";

export type Product = Omit<z.infer<typeof insertProductSchema>, "rating" | "banner"> & {
  id: string;
  price: string;
  rating: string;
  banner?: string | null;
  createdAt: Date;
  updatedAt: Date;
};
