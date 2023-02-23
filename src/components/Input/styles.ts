import { TextField } from '@mui/material';
import styled from 'styled-components';
import { InputStyledProps } from './types';

export const Search = styled(TextField)<InputStyledProps>`
  & {
    background-color: ${({ theme }) => theme.colors.primary.gray100};
  }

  >div >fieldset >legend {
    display: block;
  }
  ${({ isHeader, theme }) =>
    isHeader &&
    `
    >div >fieldset >legend {
      display: none;
    }
    >div.Mui-focused >fieldset {
      box-sizing:border-box;
      border: 2px solid ${theme.colors.primary.info};
      box-shadow: 0 0 2px 2px rgba(85, 166, 248, 0.5);
      top: 0;
    }
    >label {
      &.Mui-focused,
      &.MuiFormLabel-filled {
        transform: translate(10px, -22px); /* mueve el label */
        color: ${theme.colors.primary.primary};
      }
      &.Mui-focused  {
        color: ${theme.colors.primary.info};
      }
    }
  `}
`;
