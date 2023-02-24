import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.white};
  border: 1px solid ${({ theme }) => theme.colors.primary.gray100};
  border-radius: 0.3125rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  padding: 20px;
  margin: 1.25rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
  }
  &:active {
    transform: translateY(0);
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
    background-color: #f0f0f0;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  margin-block-end: 20px;
`;

export const Title = styled.h1`
  font-size: 1.3rem;
  font-weight: normal;
  margin-block-end: 15px;
  color: ${({ theme }) => theme.colors.primary.dark};

`;

export const Description = styled.p`
  font-size: 15px;
  margin-block-end: 1.5625rem;
  line-height: 1.5;
  word-break: break-word;
  color: ${({ theme }) => theme.colors.primary.gray700};
`;

export const Price = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary.info};
`;
