import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import ProductPrice from "./product-price";
import { Product } from "@/types";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card>
      <CardHeader>
        <Link href={`/product/${product.slug}`}>
          <Image src={product.images[0]} alt={product.name} width={300} height={300} className="object-cover rounded-t-md" />
        </Link>
      </CardHeader>
      <CardContent>
        <Link href={`/product/${product.slug}`}>
          <CardTitle>{product.name}</CardTitle>
        </Link>
        <CardDescription>{product.description}</CardDescription>
        <div className="mt-4 flex items-center justify-between">
          <p>{Number(product.rating)} Stars</p>
          {product.stock > 0 ? (
            <div className="flex items-center gap-2">
              Price:
              <ProductPrice price={Number(product.price)} />
            </div>
          ) : (
            <p className="text-destructive">Out of Stock</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
