import { useContext } from 'react';
import { ShopCartContext } from '../context/ShopCartContext';

export const useShopCart = () => {
  const context = useContext(ShopCartContext);
  if (!context) throw new Error('useShopCart debe utilizarse dentro de ShopCartProvider');
  return context;
};
