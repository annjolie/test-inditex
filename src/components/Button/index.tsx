import { ButtonLabel, Container } from './styles';
import React from 'react';
import type { ButtonProps } from './types';

export default function Button({ className, label, size, onClick }: ButtonProps): JSX.Element {
  return (
    <Container className={className} $size={size} as="button" onClick={onClick}>
      
      <ButtonLabel>{label}</ButtonLabel>
    </Container>
  );
}
