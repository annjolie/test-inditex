import type { Meta, Story } from '@storybook/react';

import ItemList from '.';
import type { ItemListProps } from './types';
import React from 'react';

export default {
  component: ItemList,
  title: 'General/ItemList',
  args: {
    productList: [
      {
        id: '1',
        imgSrc: 'https://cdn.pixabay.com/photo/2013/07/12/18/39/smartphone-153650_1280.png',
        alt: 'Product image',
        brand: 'Lorem Ipsum',
        model: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id consequat quam',
        price: '$450',
      },
      {
        id: '1',
        imgSrc: 'https://cdn.pixabay.com/photo/2013/07/12/18/39/smartphone-153650_1280.png',
        alt: 'Product image',
        brand: 'Lorem Ipsum',
        model: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id consequat quam',
        price: '$450',
      },
      {
        id: '1',
        imgSrc: 'https://cdn.pixabay.com/photo/2013/07/12/18/39/smartphone-153650_1280.png',
        alt: 'Product image',
        brand: 'Lorem Ipsum',
        model: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id consequat quam',
        price: '$450',
      },
      {
        id: '1',
        imgSrc: 'https://cdn.pixabay.com/photo/2013/07/12/18/39/smartphone-153650_1280.png',
        alt: 'Product image',
        brand: 'Lorem Ipsum',
        model: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id consequat quam',
        price: '$450',
      },
      {
        id: '1',
        imgSrc: 'https://cdn.pixabay.com/photo/2013/07/12/18/39/smartphone-153650_1280.png',
        alt: 'Product image',
        brand: 'Lorem Ipsum',
        model: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id consequat quam',
        price: '$450',
      },
      {
        id: '1',
        imgSrc: 'https://cdn.pixabay.com/photo/2013/07/12/18/39/smartphone-153650_1280.png',
        alt: 'Product image',
        brand: 'Lorem Ipsum',
        model: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id consequat quam',
        price: '$450',
      },
      {
        id: '1',
        imgSrc: 'https://cdn.pixabay.com/photo/2013/07/12/18/39/smartphone-153650_1280.png',
        alt: 'Product image',
        brand: 'Lorem Ipsum',
        model: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id consequat quam',
        price: '$450',
      },
      {
        id: '1',
        imgSrc: 'https://cdn.pixabay.com/photo/2013/07/12/18/39/smartphone-153650_1280.png',
        alt: 'Product image',
        brand: 'Lorem Ipsum',
        model: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id consequat quam',
        price: '$450',
      },
    ],
  },
} as Meta;

const Template: Story<ItemListProps> = (args) => <ItemList {...args} />;

export const Default = Template.bind({});
Default.args = {};
