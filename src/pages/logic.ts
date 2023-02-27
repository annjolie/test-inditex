import { useContext, useEffect, useState } from 'react';
import { getProductList } from '@/axios';
import type { ProductCardProps } from '@/components/ProductCard/types';
import ProductContext from '@/containers/context';

export const useLogic = () => {
  const [productList, setProductList] = useState<ProductCardProps[]>([
    {
      id: 1,
      imgSrc:
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      alt: 'Product image',
      brand: 'Green double couch with wooden legs',
      model: 'This sofa is perfect for modern tropical spaces, vintage design.',
      price: '$450',
    },
    {
      id: 2,
      imgSrc:
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      alt: 'Product image',
      brand: 'Green double couch with wooden legs',
      model: 'This sofa is perfect for modern tropical spaces, vintage design.',
      price: '$450',
    },
    {
      id: 3,
      imgSrc:
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      alt: 'Product image',
      brand: 'Green double couch with wooden legs',
      model: 'This sofa is perfect for modern tropical spaces, vintage design.',
      price: '$450',
    },
    {
      id: 4,
      imgSrc:
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      alt: 'Product image',
      brand: 'Green double couch with wooden legs',
      model: 'This sofa is perfect for modern tropical spaces, vintage design.',
      price: '$450',
    },
    {
      id: 5,
      imgSrc:
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      alt: 'Product image',
      brand: 'Green double couch with wooden legs',
      model: 'This sofa is perfect for modern tropical spaces, vintage design.',
      price: '$450',
    },
    {
      id: 6,
      imgSrc:
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      alt: 'Product image',
      brand: 'Green double couch with wooden legs',
      model: 'This sofa is perfect for modern tropical spaces, vintage design.',
      price: '$450',
    },
    {
      id: 7,
      imgSrc:
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      alt: 'Product image',
      brand: 'Green double couch with wooden legs',
      model: 'This sofa is perfect for modern tropical spaces, vintage design.',
      price: '$450',
    },
    {
      id: 8,
      imgSrc:
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      alt: 'Product image',
      brand: 'Green double couch with wooden legs',
      model: 'This sofa is perfect for modern tropical spaces, vintage design.',
      price: '$450',
    },
  ]);
  
  const { updateBreadCrumbs } = useContext(ProductContext);

  useEffect(() => {
    async function fetchData() {
      const { data: productListData } = await getProductList();
      if (productListData) {
        const productCards = productListData.map((product) => {
          const productCard: ProductCardProps = {
            id: product.id,
            imgSrc: product.image,
            alt: product.name,
            brand: product.name,
            model: product.model,
            price: product.price,
          };
          return productCard;
        });
        setProductList(productCards);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    updateBreadCrumbs([
      {
        label: 'Home',
        href: '/',
      },
    ]);
  }, [updateBreadCrumbs]);

  return {
    productList,
  };
};
