export interface ShopProduct {
  id: string;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  imageAlt: string;
  label?: string;
  inStock: boolean;
  freeShipping: boolean;
}
