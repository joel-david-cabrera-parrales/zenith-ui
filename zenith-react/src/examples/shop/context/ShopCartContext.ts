import { createContext } from 'react';
import type { ShopProduct } from '../interfaces/shop-products.interface';

export interface ShopCartItem {
  product: ShopProduct;
  quantity: number;
}

export interface ShopCartContextValue {
  items: ShopCartItem[];
  itemCount: number;
  subtotal: number;
  addToCart: (product: ShopProduct, quantity?: number) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
}

export const ShopCartContext = createContext<ShopCartContextValue | null>(null);
