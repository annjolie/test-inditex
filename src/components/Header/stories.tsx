import type { Meta, Story } from '@storybook/react';
import logo from "../../assets/styleapp.png";

import Header from '.';
import type { HeaderProps } from './types';

export default {
  component: Header,
  title: 'General/Header',
  args: {
    imgSrc: logo,
    numberOfItems: 3,
  },
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {};
