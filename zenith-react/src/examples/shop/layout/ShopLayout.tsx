import { Outlet } from 'react-router';
import { ShopCartProvider } from '../context/ShopCartProvider';

export const ShopLayout = () => {
  return (
    <ShopCartProvider>
      <Outlet />
    </ShopCartProvider>
  );
};

export default ShopLayout;
