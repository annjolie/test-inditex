import type { Meta, Story } from '@storybook/react';

import Input from '.';
import type { InputProps } from './types';
import { useState } from 'react';
import withMaxWidth from '../../storybook/decorators/WithMaxWidth';
import withPadding from '../../storybook/decorators/WithPadding';

export default {
  component: Input,
  title: 'General/Input',
  decorators: [withPadding(), withMaxWidth()],
  args: {
    id: 'input-search',
    sizes: 'small',
    label: 'Search',
    type: 'search',
    onChange: () => {},
    options: [],
  },
} as Meta;

const Template: Story<InputProps> = (args) => {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };
  return <Input {...args} value={value} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {};
