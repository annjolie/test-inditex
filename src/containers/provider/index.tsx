import React from 'react';
import ProductContext from '../context';
import { LinkProp } from '@/components/Breadcrumbs/types';

interface MyProviderProps {
  children: React.ReactNode;
}

function ProductProvider({ children }: MyProviderProps) {
  const [products, setProducts] = React.useState<number[]>([]);
  const [breadcrumbs, setBreadcrumbs] = React.useState<LinkProp[]>([]);

  return (
    <ProductContext.Provider value={{ products, setProducts, breadcrumbs, setBreadcrumbs }}>
      {...React.Children.toArray(children)}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
