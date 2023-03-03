import { useContext, useEffect, useState } from 'react';
import { getProductList } from '@/axios';
import type { ProductCardProps } from '@/components/ProductCard/types';
import ProductContext from '@/containers/context';

export const useLogic = () => {
  const [productList, setProductList] = useState<ProductCardProps[]>([
    {
      id: 1,
      imgSrc:
        'https://cdn.pixabay.com/photo/2013/07/12/18/39/smartphone-153650_1280.png',
      alt: 'Product image',
      brand: 'Lorem Ipsum',
      model: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id consequat quam',
      price: '$450',
    },
    {
      id: 2,
      imgSrc:
        'https://cdn.pixabay.com/photo/2013/07/12/18/39/smartphone-153650_1280.png',
      alt: 'Product image',
      brand: 'Lorem Ipsum',
      model: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id consequat quam',
      price: '$450',
    },
    {
      id: 3,
      imgSrc:
        'https://cdn.pixabay.com/photo/2013/07/12/18/39/smartphone-153650_1280.png',
      alt: 'Product image',
      brand: 'Lorem Ipsum',
      model: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id consequat quam',
      price: '$450',
    },
    {
      id: 4,
      imgSrc:
        'https://cdn.pixabay.com/photo/2013/07/12/18/39/smartphone-153650_1280.png',
      alt: 'Product image',
      brand: 'Lorem Ipsum',
      model: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id consequat quam',
      price: '$450',
    },
    {
      id: 5,
      imgSrc:
        'https://cdn.pixabay.com/photo/2013/07/12/18/39/smartphone-153650_1280.png',
      alt: 'Product image',
      brand: 'Lorem Ipsum',
      model: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id consequat quam',
      price: '$450',
    },
    {
      id: 6,
      imgSrc:
        'https://cdn.pixabay.com/photo/2013/07/12/18/39/smartphone-153650_1280.png',
      alt: 'Product image',
      brand: 'Lorem Ipsum',
      model: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id consequat quam',
      price: '$450',
    },
    {
      id: 7,
      imgSrc:
        'https://cdn.pixabay.com/photo/2013/07/12/18/39/smartphone-153650_1280.png',
      alt: 'Product image',
      brand: 'Lorem Ipsum',
      model: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id consequat quam',
      price: '$450',
    },
    {
      id: 8,
      imgSrc:
        'https://cdn.pixabay.com/photo/2013/07/12/18/39/smartphone-153650_1280.png',
      alt: 'Product image',
      brand: 'Lorem Ipsum',
      model: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id consequat quam',
      price: '$450',
    },
  ]);

  const { setBreadcrumbs } = useContext(ProductContext);

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
    setBreadcrumbs([
      {
        label: 'Home',
        href: '/',
      },
    ]);
  }, [setBreadcrumbs]);

  return {
    productList,
  };
};
