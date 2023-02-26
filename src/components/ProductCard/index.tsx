import { Container, Image, Title, Description, Price } from './styles';
import React from 'react';
import type { ProductCardProps } from './types';
import NextLink from 'next/link';

export default function ProductCard({
  id,
  imgSrc,
  alt,
  brand,
  model,
  price,
  className,
}: ProductCardProps): JSX.Element {
  return (
    <Container className={className}>
      <NextLink href={`/product/${id}`} >
        <Image src={imgSrc} alt={alt} />
        <Title>{brand}</Title>
        <Description>{model}</Description>
        <Price>{price}</Price>
      </NextLink>
    </Container>
  );
}
