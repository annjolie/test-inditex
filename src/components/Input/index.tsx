import React from 'react';
import type { InputProps } from './types';
import { Search } from './styles';

export default function Input({ label, value, type, isHeader, onChange }: InputProps): JSX.Element {
  return (
    <Search
      type={type}
      size="small"
      onChange={onChange}
      id="outlined-search"
      label={label}
      value={value}
      $isHeader={isHeader}
    />
  );
}
