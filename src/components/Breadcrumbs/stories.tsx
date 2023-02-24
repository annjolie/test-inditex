import type { Meta, Story } from '@storybook/react';

import Breadcrumbs from '.';
import type { BreadcrumbsProps } from './types';

export default {
  component: Breadcrumbs,
  title: 'General/Breadcrumbs',
  args: {
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
  },
} as Meta;

const Template: Story<BreadcrumbsProps> = (args) => <Breadcrumbs {...args} />;

export const Default = Template.bind({});
Default.args = {};
