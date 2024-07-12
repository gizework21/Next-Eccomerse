import Filter from "@/components/Filter";
import ProductList from "../components/ProductList";

const Page: React.FC = () => {
  return (
    <div className="flex py-8 px-4 gap-5">
      <Filter />
      <ProductList />
    </div>
  );
};

export default Page;
