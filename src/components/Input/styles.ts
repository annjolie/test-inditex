import { TextField } from '@mui/material';
import styled from 'styled-components';

export const Search = styled(TextField)`
  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    box-shadow: ${({ theme }) => theme.colors.shadows.default};
  }
`;
