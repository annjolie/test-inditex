import { useContext } from 'react';
import ProductContext from '@/containers/context';

export const useLogic = () => {
  const { products, breadcrumbs } = useContext(ProductContext);

  return { products, breadcrumbs };
};
