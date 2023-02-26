import { useEffect, useState } from 'react';
import { getProductDetails } from '@/axios';
import { ProductType } from '@/common/types/productType';
import { useRouter } from 'next/router';

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
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      battery: '4-cell, 70 Whr',
      camera: '720p HD',
      dimensions: '14.96" x 10.43" x 0.89"',
      weight: '5.07 lbs',
    });

  useEffect(() => {
    async function fetchData() {
      const { data: productData } = await getProductDetails(productId);
      if (productData) {
        setProduct(productData);
      }
    }
    fetchData();
  }, [productId]);

  return {
    product,
  };
};
