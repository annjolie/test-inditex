import type { Meta, Story } from '@storybook/react';

import Header from '.';
import type { HeaderProps } from './types';

export default {
  component: Header,
  title: 'General/Header',
  args: {
    numberOfItems: 3,
    links: [
      {
        label: 'Home',
        href: '/',
      },
      {
        label: 'About',
        href: '/about',
      },
      {
        label: 'Contact',
        href: '/contact',
      },
    ],
    options: [],
  },
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {};
