import { from } from '../../styles/utils/responsive';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.white};
  border: 1px solid ${({ theme }) => theme.colors.primary.gray100};
  border-radius: 0.3125rem;
  box-shadow: ${({ theme }) => theme.colors.shadows.default};
  padding: 20px;
  margin: 1.25rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.colors.shadows.hover};
  }
  &:active {
    transform: translateY(0);
    box-shadow: ${({ theme }) => theme.colors.shadows.default};
    background-color: #f0f0f0;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  margin-block-end: 20px;
`;

export const Title = styled.h1`
  font-size: 1rem;
  font-weight: normal;
  margin-block-end: 15px;
  color: ${({ theme }) => theme.colors.primary.dark};

  ${from.tabletPortrait} {
    font-size: 1.1rem;
  }
`;

export const Description = styled.p`
  font-size: 0.75rem;
  margin-block-end: 0.5625rem;
  line-height: 1.5;
  word-break: break-word;
  color: ${({ theme }) => theme.colors.primary.gray700};

  ${from.tabletPortrait} {
    font-size: 0.8rem;
    margin-block-end: 1rem;
  }
`;

export const Price = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary.info};

  ${from.tabletPortrait} {
    font-size: 1.2rem;
  }
`;
