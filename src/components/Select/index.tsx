import React from 'react';
import type { SelectProps } from './types';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function Select({ options, label, onSelect, value }: SelectProps): JSX.Element {
  return (
    <Autocomplete
      disablePortal
      options={options}
      sx={{ width: 300 }}
      onChange={(_event, value) => {
        if (value) {
          onSelect(value);
        }
      }}
      value={value}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
}
