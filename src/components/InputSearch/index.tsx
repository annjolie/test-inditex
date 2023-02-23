import React from 'react';
import type { InputSearchProps } from './types';
import { Search } from './styles';

export default function InputSearch({}: InputSearchProps): JSX.Element {
  return <Search id="outlined-search" label="Search" type="search" />;
}
