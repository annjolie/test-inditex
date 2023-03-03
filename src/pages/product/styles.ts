import styled from 'styled-components';
import Button from '@/components/Button';
import Select from '@/components/Select';

export const Title = styled.h1`
  font-size: 2.12rem;
  margin-block: 3rem;
`;

export const DescriptionContainer = styled.div`
    padding: 0 20px;
`;

export const DescriptionTitle = styled.h2`
    font-size: 1.12rem;
`;

export const Text = styled.p`
  font-size: 1.12rem;
  margin-block: 1rem;
`;

export const Bold = styled.b``;

export const Span = styled.span`
    margin-inline-start: 1rem;
`;

export const Image = styled.img`
  width: 50%;
  height: auto;
`;

export const ActionsContainer = styled.div`
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    >button {
      max-width: fit-content; 
    } 
`;

