import type { Meta, Story } from '@storybook/react';

import Select from '.';
import type { SelectProps } from './types';

export default {
  component: Select,
  title: 'General/Select',
  args: {
    id: 'select',
    label: 'Select Storage',
    options: [
      {
        id: '1',
        label: '1GB',
      },
      {
        id: '2',
        label: '2GB',
      },
    ],
  },
} as Meta;

const Template: Story<SelectProps> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {};
