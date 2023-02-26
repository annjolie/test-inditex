import React from 'react';
import type { SelectProps } from './types';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function Select({ id, options, label }: SelectProps): JSX.Element {
  return (
    <Autocomplete
      disablePortal
      id={id}
      options={options}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
}
