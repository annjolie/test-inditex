import { LinkProp } from '@/components/Breadcrumbs/types';
import { createContext } from 'react';

export interface ProductContextState {
  // Define las propiedades que desees almacenar en el estado del contexto
  products: number[];
  breadCrumbs: LinkProp[];
}

interface ProductContextActions {
  // Define las acciones que desees realizar en el contexto
  productAddedToCart: (productAdded: number) => void;
  updateBreadCrumbs: (breadCrumbs: LinkProp[]) => void;
}

interface ProductContextValue extends ProductContextState, ProductContextActions {}

// Crea un contexto con un valor inicial
const ProductContext = createContext<ProductContextValue>({
  products: [],
  productAddedToCart: () => {},
  breadCrumbs: [],
  updateBreadCrumbs: () => {},
});

export default ProductContext;
