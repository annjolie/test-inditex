import { Container } from './styles';
import React from 'react';
import type { InputSearchProps } from './types';

export default function InputSearch({ className }: InputSearchProps): JSX.Element {
  return <Container className={className}></Container>;
}
