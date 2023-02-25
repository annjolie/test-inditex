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
  ${({ $isHeader: isHeader, theme }) =>
    isHeader &&
    `
    >div >fieldset >legend {
      display: none;
    }
    >div.Mui-focused >fieldset {
      box-sizing:border-box;
      border: 2px solid ${theme.colors.primary.white};
      box-shadow: 0 0 3px 2px rgba(255, 255, 255, 0.8);
      top: 0;
    }
    >label {
      &.Mui-focused,
      &.MuiFormLabel-filled {
        transform: translate(10px, -27px); /* mueve el label */
        color: ${theme.colors.primary.white};
        font-weight: 400;
      
      }
      &.Mui-focused  {
        color: ${theme.colors.primary.white};
      }
    }
  `}
`;
