import React from 'react';
import type { InputProps } from './types';
import { Search } from './styles';

export default function Input({ label, value, onChange }: InputProps): JSX.Element {
  return <Search onChange={onChange} id="outlined-search" label={label} value={value} type="search" />;
}
