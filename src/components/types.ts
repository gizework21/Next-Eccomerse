export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: boolean;
  rating: number;
  image: string;
  brand: string;
  color: string;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
