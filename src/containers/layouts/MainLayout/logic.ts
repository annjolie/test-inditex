import { useContext } from 'react';
import ProductContext from '@/containers/context';

export const useLogic = () => {
  const { products, breadCrumbs } = useContext(ProductContext);

  return { products, breadCrumbs };
};
