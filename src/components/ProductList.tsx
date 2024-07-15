"use client";

import { useEffect, useState } from "react";
import { products } from "@/app/data/productsData";
import ProductCardList from "./productCardList";
import Pagination from "./Pagination";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const ProductList = () => {
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const productsPerPage = 6;
  const router = useRouter();

  useEffect(() => {
    const filterProducts = () => {
      let filtered = products;

      const brands = searchParams.getAll("brand");
      const ratings = searchParams.getAll("rating");
      const colors = searchParams.getAll("color");

      if (brands.length > 0) {
        filtered = filtered.filter((product) => brands.includes(product.brand));
      }

      if (ratings.length > 0) {
        filtered = filtered.filter((product) =>
          ratings.includes(product.rating.toString())
        );
      }

      if (colors.length > 0) {
        filtered = filtered.filter((product) => colors.includes(product.color));
      }

      setFilteredProducts(filtered);
    };

    filterProducts();
  }, [searchParams]);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (page:any) => {
    setCurrentPage(page);
  };

  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handleStoreProductClick = () => {
    router.push("/storeForm");
  };

  return (
    <div className="w-[80%]">
      <button 
        onClick={handleStoreProductClick} 
        className="mb-4 px-4 py-2 bg-[#d7a022] text-white rounded-lg"
      >
        Store Product
      </button>
      {filteredProducts.length === 0 ? (
        <p className="font-bold text-2xl flex items-center justify-center border border-black h-[90vh]">
          No product found.
        </p>
      ) : (
        <>
          <div className="flex flex-wrap justify-between gap-y-6">
            {currentProducts.map((product) => (
              <ProductCardList key={product.id} product={product} />
            ))}
          </div>

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </>
      )}
    </div>
  );
};

export default ProductList;
