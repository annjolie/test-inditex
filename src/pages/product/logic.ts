import { useCallback, useContext, useEffect, useState } from 'react';
import { addProductToCart, getProductDetails } from '@/axios';
import { ProductType } from '@/common/types/productType';
import { useRouter } from 'next/router';
import { SelectOptionProps } from '@/components/Select/types';
import ProductContext from '@/containers/context';

export const useLogic = () => {
  const router = useRouter();
  const { id } = router.query;
  const productId = +(id?.toString() ?? '');

  const [product, setProduct] = useState<ProductType>({
    id: 1,
    name: 'Dell XPS 15',
    model: 'XPS 15 9500',
    price: '$450',
    cpu: 'Intel Core i7-9700K',
    ram: '16GB',
    os: 'Windows 10 Home',
    screen: '15.6" FHD',
    image:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    battery: '4-cell, 70 Whr',
    camera: '720p HD',
    dimensions: '14.96" x 10.43" x 0.89"',
    weight: '5.07 lbs',
  });

  const storageList: SelectOptionProps[] = [
    {
      id: '1',
      label: '256GB SSD',
    },
    {
      id: '2',
      label: '512GB SSD',
    },
    {
      id: '3',
      label: '1TB SSD',
    },
    {
      id: '4',
      label: '2TB SSD',
    },
  ];
  const colorList: SelectOptionProps[] = [
    {
      id: '1',
      label: 'Black',
    },
    {
      id: '2',
      label: 'White',
    },
    {
      id: '3',
      label: 'Silver',
    },
    {
      id: '4',
      label: 'Gold',
    },
  ];

  const [storageSelected, setStorageSelected] = useState<SelectOptionProps>({ id: '1', label: '256GB SSD' });
  const [colorSelected, setColorSelected] = useState<SelectOptionProps>({ id: '1', label: 'Black' });

  const { productAddedToCart, updateBreadCrumbs } = useContext(ProductContext);

  useEffect(() => {
    async function fetchData() {
      const { data: productData } = await getProductDetails(productId);
      if (productData) {
        setProduct(productData);
      }
    }
    fetchData();
  }, [productId]);

  const handleStorageChange = (storage: SelectOptionProps) => {
    setStorageSelected(storage);
  };

  const handleColorChange = (color: SelectOptionProps) => {
    setColorSelected(color);
  };

  const handleAddToCart = useCallback(() => {
    async function sendData() {
      const { data: productData } = await addProductToCart(productId, colorSelected.label, storageSelected.label);
      productAddedToCart(productId);
      if (productData) {
        setProduct(productData);
      }
    }

    sendData();
  }, [colorSelected.label, productAddedToCart, productId, storageSelected.label]);

  useEffect(() => {
    updateBreadCrumbs([
      {
        label: 'Home',
        href: '/',
      },
      {
        label: 'Product',
        href: `/product/${productId}`,
      },
    ]);
  }, [updateBreadCrumbs, productId]);

  return {
    product,
    storageList,
    colorList,
    storageSelected,
    colorSelected,
    handleStorageChange,
    handleColorChange,
    handleAddToCart,
  };
};
