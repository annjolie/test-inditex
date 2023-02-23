import React from 'react';
import type { InputProps } from './types';
import { Search } from './styles';

export default function Input({ label, onChange, type, value }: InputProps): JSX.Element {
  return <Search onChange={onChange} id="outlined-search" label={label} value={value} type={type} />;
}
