/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
import { Product } from "./types";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="relative flex flex-col gap-5 p-4 border border-[#d69f22] w-[230px] h-[400px] rounded-xl shadow-md">
      <div className="w-[200px] mx-auto h-[200px] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover rounded-lg w-full h-full"
        />
        {product.discount && (
          <span className="absolute top-2 right-2 bg-gradient-to-b from-red-600 to-black text-white text-xs px-2 py-1 rounded-sm">
            30% Off
          </span>
        )}
      </div>

      <div className="h-[30%] flex flex-col justify-between">
        <h2 className="text-base font-bold">{product.name}</h2>

        <div className="flex items-center text-sm text-[#cbcbcb]">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          (No reviews Yet)
        </div>

        <div className="text-xl font-black">
          {product.discount ? (
            <>
              <span className="line-through text-gray-500">
                ${product.originalPrice}
              </span>
              <span className="ml-3">${product.price}</span>
            </>
          ) : (
            <span>${product.price}</span>
          )}
        </div>
      </div>

      <div className="flex justify-between">
        <button className="px-3 py-0.5 relative rounded-md border border-[#d69f22] text-[#d69f22] font-semibold">
          <span className="absolute inset-0 bg-[#d69f22] opacity-10 rounded-md"></span>
          <span className="relative font-bold">Add To Cart</span>
        </button>

        <button className="p-2 relative rounded-md border border-[#d69f22] text-[#d69f22] font-semibold">
          <span className="absolute inset-0 bg-[#d69f22] opacity-10 rounded-md"></span>
          <span className="relative font-bold">
            <FaRegHeart />
          </span>
        </button>

        <button className="p-2 relative rounded-md border border-[#d69f22] text-[#d69f22] font-semibold">
          <span className="absolute inset-0 bg-[#d69f22] opacity-10 rounded-md"></span>
          <span className="relative font-bold">
            <IoShareSocialSharp />
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
