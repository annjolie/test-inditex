import { URL } from '@/common/const/url';
import { ProductType } from '@/common/types/productType';
import axios from 'axios';

const instance = axios.create({
  baseURL: URL.apiUrl,
  timeout: 1000,
});

type AxiosError = {
  data: null;
  error: Error;
};

const handleAxiosError = (error: Error): AxiosError => ({
  data: null,
  error,
});

export const getProductList = async (): Promise<
  { data: ProductType[]; error: null } | AxiosError
> =>
  instance
    .get('/product')
    .then(({ data }) => ({ data, error: null }))
    .catch((error) => handleAxiosError(error));

export const getProductDetails = async (id: number): Promise<
  { data: ProductType; error: null } | AxiosError
> =>
  instance
    .get(`/product/${id}`)
    .then(({ data }) => ({ data, error: null }))
    .catch((error) => handleAxiosError(error));
