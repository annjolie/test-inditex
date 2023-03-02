import { LinkProp } from '@/components/Breadcrumbs/types';
import { Dispatch, SetStateAction, createContext } from 'react';

export interface ProductContextState {
  products: number[];
  breadcrumbs: LinkProp[];
}

interface ProductContextActions {
  setProducts: Dispatch<SetStateAction<number[]>>;
  setBreadcrumbs: React.Dispatch<React.SetStateAction<LinkProp[]>>;
}

interface ProductContextValue extends ProductContextState, ProductContextActions {}

const ProductContext = createContext<ProductContextValue>({
  products: [],
  setProducts: () => {},
  breadcrumbs: [],
  setBreadcrumbs: () => {},
});

export default ProductContext;
