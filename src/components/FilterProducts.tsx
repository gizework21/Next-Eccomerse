"use client";

/* eslint-disable @next/next/no-img-element */
import { products } from "@/app/data/productsData";
import { getColorHex } from "@/utils";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import FilterIcon from "../../public/assets/filter.png";
import Image from "next/image";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const Filter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Extract Brands, Colors, and Ratings
  const brands = Array.from(new Set(products.map((product) => product.brand)));

  const colors = Array.from(
    new Set(products.map((product) => product.color))
  ).filter(Boolean);

  const ratings = [5, 4, 3, 2, 1];

  // Filter Handler Function
  const handleFilters = (filterType: string, value: string | number) => {
    const params = new URLSearchParams(searchParams.toString());
    const queryKey = filterType.toLowerCase();

    if (params.has(queryKey)) {
      const values = params.getAll(queryKey);

      if (values.includes(value.toString())) {
        params.delete(queryKey);
        values
          .filter((v) => v !== value.toString())
          .forEach((v) => params.append(queryKey, v));
      } else {
        params.append(queryKey, value.toString());
      }
    } else {
      params.append(queryKey, value.toString());
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="p-4 bg-[#f7f7f7] rounded-lg w-[20%]">
      <div className="flex items-center gap-1 mb-6">
        <Image src={FilterIcon} alt="" className="w-4 h-4" />
        <h2 className="text-lg font-semibold">FILTERS</h2>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-md font-semibold">CATEGORIES</h3>

        <div className="flex flex-col gap-2">
          <h4 className="text-md font-semibold">Brands</h4>
          <ul className="flex flex-col space-y-2 h-[150px] pr-1 overflow-y-scroll">
            {brands.map((brand) => (
              <li key={brand} className="flex items-center justify-between">
                <label
                  htmlFor={brand}
                  className="capitalize font-semibold text-[#817f7f]"
                >
                  {brand}
                </label>

                <input
                  type="checkbox"
                  id={brand}
                  className="h-4 w-4"
                  onChange={() => handleFilters("brand", brand)}
                />
              </li>
            ))}
          </ul>
        </div>

        <hr className="bg-black" />

        <div className="flex flex-col gap-2 pr-3">
          <h3 className="text-md font-semibold mb-2">Ratings</h3>
          <ul className="flex flex-col space-y-2">
            {ratings.map((rating) => (
              <li key={rating} className="flex items-center justify-between">
                <label
                  htmlFor={`rating-${rating}`}
                  className="flex items-center"
                >
                  {Array.from({ length: rating }, (_, i) => (
                    <AiFillStar key={i} className="text-[#d69f22]" />
                  ))}
                  {Array.from({ length: 5 - rating }, (_, i) => (
                    <AiFillStar key={i} className="text-[#cbcbcb]" />
                  ))}
                </label>

                <input
                  type="checkbox"
                  id={`rating-${rating}`}
                  className="w-4 h-4"
                  onChange={() => handleFilters("rating", rating)}
                />
              </li>
            ))}
          </ul>
        </div>

        <hr className="bg-black" />

        <div className="flex flex-col gap-2 pr-3">
          <h3 className="text-md font-semibold mb-2">Colors</h3>
          <ul className="flex flex-col space-y-2">
            {colors.map((color) => (
              <li key={color} className="flex items-center justify-between">
                <label
                  htmlFor={color}
                  className="flex items-center justify-between w-[45%]"
                  style={{ color: getColorHex(color) }}
                >
                  {color.charAt(0).toUpperCase() + color.slice(1)}

                  <span
                    className="inline-block w-6 h-4 rounded-full mr-2"
                    style={{ backgroundColor: getColorHex(color) }}
                  ></span>
                </label>

                <input
                  type="checkbox"
                  id={color}
                  className="w-4 h-4"
                  onChange={() => handleFilters("color", color)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Filter;
