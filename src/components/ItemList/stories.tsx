import type { Meta, Story } from '@storybook/react';

import ItemList from '.';
import type { ItemListProps } from './types';

export default {
  component: ItemList,
  title: 'General/ItemList',
  args: {
    productList: [
      {
        id: '1',
        imgSrc:
          'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        alt: 'Product image',
        brand: 'Green double couch with wooden legs',
        model: 'This sofa is perfect for modern tropical spaces, vintage design.',
        price: '$450',
      },
      {
        id: '1',
        imgSrc:
          'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        alt: 'Product image',
        brand: 'Green double couch with wooden legs',
        model: 'This sofa is perfect for modern tropical spaces, vintage design.',
        price: '$450',
      },
      {
        id: '1',
        imgSrc:
          'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        alt: 'Product image',
        brand: 'Green double couch with wooden legs',
        model: 'This sofa is perfect for modern tropical spaces, vintage design.',
        price: '$450',
      },
      {
        id: '1',
        imgSrc:
          'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        alt: 'Product image',
        brand: 'Green double couch with wooden legs',
        model: 'This sofa is perfect for modern tropical spaces, vintage design.',
        price: '$450',
      },
      {
        id: '1',
        imgSrc:
          'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        alt: 'Product image',
        brand: 'Green double couch with wooden legs',
        model: 'This sofa is perfect for modern tropical spaces, vintage design.',
        price: '$450',
      },
      {
        id: '1',
        imgSrc:
          'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        alt: 'Product image',
        brand: 'Green double couch with wooden legs',
        model: 'This sofa is perfect for modern tropical spaces, vintage design.',
        price: '$450',
      },
      {
        id: '1',
        imgSrc:
          'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        alt: 'Product image',
        brand: 'Green double couch with wooden legs',
        model: 'This sofa is perfect for modern tropical spaces, vintage design.',
        price: '$450',
      },
      {
        id: '1',
        imgSrc:
          'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        alt: 'Product image',
        brand: 'Green double couch with wooden legs',
        model: 'This sofa is perfect for modern tropical spaces, vintage design.',
        price: '$450',
      },
    ],
  },
} as Meta;

const Template: Story<ItemListProps> = (args) => <ItemList {...args} />;

export const Default = Template.bind({});
Default.args = {};
