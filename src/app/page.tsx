import FilterProducts from "@/components/FilterProducts";
import ProductList from "../components/ProductList";

const Page: React.FC = () => {
  return (
    <div className="flex py-8 px-4 gap-5">
      <FilterProducts />
      <ProductList />
    </div>
  );
};

export default Page;
