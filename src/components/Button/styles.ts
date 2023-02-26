import styled, { css } from 'styled-components';
import { $ContainerProps } from './types';

export const Container = styled.span<$ContainerProps>`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  border-radius: 0.375rem;

  background-color: ${({ theme }) => theme.colors.primary.info};
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.primary};
  }

  ${({ $size }) => {
    switch ($size) {
      case 'small':
        return css`
          gap: '0.375rem';
          height: 2.25rem;
          padding-inline: 0.75rem;
          padding-block: 0.4375rem;
          line-height: 1.375rem;
          ${ButtonLabel} {
            width: auto;
            font-size: 0.875rem;
            line-height: 1.375rem;
          }
        `;
      case 'medium':
        return css`
          gap: 0.5rem;
          height: 2.5rem;
          padding-inline: 0.75rem;
          padding-block: 0.5rem;
          line-height: 1.5rem;
        `;
      default:
        return css`
          gap: 0.75rem;
          height: 3rem;
          padding-inline: 1rem;
          padding-block: 0.75rem;
          line-height: 1.5rem;
        `;
    }
  }}
`;

export const ButtonLabel = styled.div`
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: 0.01em;
  color: ${({ theme }) => theme.colors.primary.white};
`;
