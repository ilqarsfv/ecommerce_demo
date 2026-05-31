import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/prisma";

const HomePage = async () => {
  const latestProducts = await getLatestProducts({ limit: 4 });
  return (
    <div className="container mx-auto px-4 py-8">
      <ProductList
        data={latestProducts}
        title="Featured Products"
        limit={4}
      />
    </div>
  );
};

export default HomePage;
