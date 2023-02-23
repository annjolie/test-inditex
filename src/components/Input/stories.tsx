import type { Meta, Story } from '@storybook/react';

import Input from '.';
import type { InputProps } from './types';
import { useState } from 'react';

export default {
  component: Input,
  title: 'General/Input',
  args: {
    label: 'Search',
    type: 'search',
  },
} as Meta;

const Template: Story<InputProps> = (args) => {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };
  return <Input {...args} onChange={handleChange} value={value} />;
};

export const Default = Template.bind({});
Default.args = {};
