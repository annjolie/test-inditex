import type { Meta, Story } from '@storybook/react';

import InputSearch from '.';
import type { InputSearchProps } from './types';

export default {
  component: InputSearch,
  title: 'General/InputSearch',
} as Meta;

const Template: Story<InputSearchProps> = (args) => <InputSearch {...args} />;

export const Default = Template.bind({});
Default.args = {};
