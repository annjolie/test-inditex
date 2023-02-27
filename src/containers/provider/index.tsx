import React, { useMemo, useReducer } from 'react';
import ProductContext, { ProductContextState } from '../context';
import { LinkProp } from '@/components/Breadcrumbs/types';

interface MyProviderProps {
  children: React.ReactNode;
}

// Define el reducer
function myReducer(state: ProductContextState, action: any) {
  switch (action.type) {
    case 'productAddedToCart':
      return { ...state, products: [...state.products, action.payload] };
    case 'updateBreadCrumbs':
      return { ...state, breadCrumbs: action.payload };
    default:
      return state;
  }
}

// Crea el componente proveedor que utiliza el hook useReducer
function ProductProvider({ children }: MyProviderProps) {
  const [state, dispatch] = useReducer(myReducer, {
    products: [],
    breadCrumbs: [],
  });

  const valueContext = useMemo(() => {
    return {
      ...state,
      productAddedToCart: (productAdded: number) => dispatch({ type: 'productAddedToCart', payload: productAdded }),
      updateBreadCrumbs: (breadCrumbs: LinkProp[]) => dispatch({ type: 'updateBreadCrumbs', payload: breadCrumbs }),
    };
  }, [state, dispatch]);

  return <ProductContext.Provider value={valueContext}>{children}</ProductContext.Provider>;
}

export default ProductProvider;
