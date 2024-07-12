import React from "react";
import { PaginationProps } from "./types";

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handleClick = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPagination = () => {
    const pageButtons = [];
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pageButtons.push(
          <button
            key={i}
            onClick={() => handleClick(i)}
            className={`mx-1 px-3 py-1 rounded-md ${
              currentPage === i
                ? "bg-[#d69f22] text-white"
                : "bg-white text-[#d69f22] border border-[#d69f22]"
            }`}
          >
            {i}
          </button>
        );
      } else if (
        (i === currentPage - 2 && currentPage > 3) ||
        (i === currentPage + 2 && currentPage < totalPages - 2)
      ) {
        pageButtons.push(
          <span key={i} className="mx-1 px-3 py-1 text-[#d69f22]">
            ...
          </span>
        );
      }
    }
    return pageButtons;
  };

  return (
    <div className="flex justify-center mt-6">
      <button
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
        className={`mx-1 px-3 py-1 rounded-md ${
          currentPage === 1
            ? "text-gray-300 cursor-not-allowed"
            : " text-[#d69f22]"
        }`}
      >
        Prev
      </button>

      {renderPagination()}

      <button
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`mx-1 px-3 py-1 rounded-md text-[#d69f22] ${
          currentPage === totalPages
            ? "text-gray-300 cursor-not-allowed"
            : " text-[#d69f22]"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
