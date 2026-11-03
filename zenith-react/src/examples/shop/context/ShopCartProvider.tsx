import { useEffect, useMemo, useState, type ReactNode } from 'react';
import type { ShopCartItem, ShopCartContextValue } from './ShopCartContext';
import { ShopCartContext } from './ShopCartContext';

const STORAGE_KEY = 'casa-clara-cart';
const readStoredCart = (): ShopCartItem[] => {
  if (typeof window === 'undefined') return [];
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    const parsed: unknown = JSON.parse(stored);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item): item is ShopCartItem =>
      typeof item === 'object' && item !== null &&
      'product' in item && 'quantity' in item &&
      typeof item.quantity === 'number' && item.quantity > 0 &&
      typeof item.product === 'object' && item.product !== null &&
      'id' in item.product && 'price' in item.product
    );
  } catch {
    return [];
  }
};

export const ShopCartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<ShopCartItem[]>(readStoredCart);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // El carrito sigue funcionando durante la sesión aunque el navegador bloquee el almacenamiento.
    }
  }, [items]);

  const value = useMemo<ShopCartContextValue>(() => ({
    items,
    itemCount: items.reduce((count, item) => count + item.quantity, 0),
    subtotal: items.reduce((total, item) => total + item.product.price * item.quantity, 0),
    addToCart: (product, quantity = 1) => setItems(current => {
      const existing = current.find(item => item.product.id === product.id);
      return existing
        ? current.map(item => item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item)
        : [...current, { product, quantity }];
    }),
    updateQuantity: (productId, quantity) => setItems(current =>
      quantity < 1
        ? current.filter(item => item.product.id !== productId)
        : current.map(item => item.product.id === productId ? { ...item, quantity } : item)
    ),
    removeFromCart: productId => setItems(current => current.filter(item => item.product.id !== productId)),
    clearCart: () => setItems([]),
  }), [items]);

  return <ShopCartContext.Provider value={value}>{children}</ShopCartContext.Provider>;
};
