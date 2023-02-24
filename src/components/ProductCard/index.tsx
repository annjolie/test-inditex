import { Container, Image, Title, Description, Price } from './styles';
import React from 'react';
import type { ProductCardProps } from './types';
import NextLink from 'next/link';

export default function ProductCard({
  imgSrc,
  alt,
  title,
  description,
  price,
  className,
}: ProductCardProps): JSX.Element {
  return (
    <Container className={className}>
      <NextLink href='' >
        <Image src={imgSrc} alt={alt} />
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Price>{price}</Price>
      </NextLink>
    </Container>
  );
}
