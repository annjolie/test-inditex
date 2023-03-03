import type { Meta, Story } from '@storybook/react';

import ProductCard from '.';
import type { ProductCardProps } from './types';

export default {
  component: ProductCard,
  title: 'General/ProductCard',
  args: {
    imgSrc: 'https://cdn.pixabay.com/photo/2013/07/12/18/39/smartphone-153650_1280.png',
    alt: 'Product image',
    brand: 'Lorem Ipsum',
    model: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id consequat quam',
    price: '$450',
  },
} as Meta;

const Template: Story<ProductCardProps> = (args) => <ProductCard {...args} />;

export const Default = Template.bind({});
Default.args = {};
