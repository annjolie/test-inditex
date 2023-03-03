import styled from 'styled-components';
import { BsFillBagFill } from 'react-icons/bs';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.dark};
  padding: 30px 0 20px 0;
  gap: 1rem;
`;

export const Logo = styled.img`
  height: 8rem;
`;

export const BagIcon = styled(BsFillBagFill)`
  color: ${({ theme }) => theme.colors.primary.white};
  position: absolute;
  inset-inline-end: 1.875rem;
  inset-block-start: 2.8rem;
`;

export const Text = styled.span`
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary.danger};
  color: ${({ theme }) => theme.colors.primary.white};
  font-size: 0.625rem;
  padding: 0 3.5px;
  position: sticky;
`;

export const FirstRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2.25rem;
  padding: 0 10px 10px 0;
`;

export const SecondRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px 0 10px;
  margin-inline-start: 1.8rem;
`;
