import type { Meta, Story } from '@storybook/react';

import Button from '.';
import type { ButtonProps } from './types';

export default {
  component: Button,
  title: 'General/Button',
  args: {
    label: 'Button',
    size: 'medium',
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {};
