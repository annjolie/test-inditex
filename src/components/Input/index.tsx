import React from 'react';
import type { InputProps } from './types';
import { InputStyled } from './styles';
import { Autocomplete } from '@mui/material';

export default function Input({ id, sizes, options, label, value, type, isHeader, onChange }: InputProps): JSX.Element {
  return (
    <Autocomplete
      disablePortal
      id={id}
      options={options}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <InputStyled
          {...params}
          type={type}
          size={sizes}
          onChange={onChange}
          id={id}
          label={label}
          value={value}
          $isHeader={isHeader}
        />
      )}
    />
  );
}
