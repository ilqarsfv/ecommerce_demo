import { getProductBySlug } from "@/lib/actions/prisma";
import NotFound from "@/app/not-found";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ProductPrice from "@/components/shared/product/product-price";
import ProductImages from "@/components/shared/product/product-images";

const ProductDetailsPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return <NotFound />;
  }

  return (
    <section>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-5">
          {/* Images Columns */}
          <div className="col-span-2">
            <ProductImages images={product.images} />
          </div>
          {/* Detail Columns */}
          <div className="col-span-2 p-5">
            <div className="flex flex-col gap-6">
              <p>
                {product.brand} {product.category}
              </p>
              <h1 className="text-2xl font-bold">{product.name}</h1>
              <p>
                {product.rating} of {product.numReviews} Reviews
              </p>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-6">
              <div className="bg-[#0dd40d] font-medium text-white py-2 px-4 rounded-[32px]">
                <ProductPrice price={Number(product.price)} />
              </div>
            </div>
            <div className="mt-10">
              <p className="font-semibold">Description</p>
              <p>{product.description}</p>
            </div>
          </div>
          <div>
            <Card>
              <CardContent className="p-4">
                <div className="mb-4 flex justify-between">
                  <div>Price</div>
                  <div>{product.price}</div>
                </div>
                <div className="mb-4 flex justify-between">
                  <div>Status</div>
                  <div>{product.stock > 0 ? <Badge variant={"outline"}>In Stock</Badge> : <Badge variant="destructive">Out of Stock</Badge>}</div>
                </div>
                {product.stock > 0 && (
                  <div>
                    <Button className="w-full cursor-pointer">Add to Cart</Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
