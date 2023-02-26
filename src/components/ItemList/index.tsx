import { Container } from './styles';
import React from 'react';
import type { ItemListProps } from './types';
import ProductCard from '../ProductCard';
import { Grid } from '@material-ui/core';

export default function ItemList({ productList, className }: ItemListProps): JSX.Element {
  return (
    <Container className={className}>
      <Grid container>
        {productList.map((product) => (
          <Grid key={product.id} item xs={12} sm={3} md={3}>
            <ProductCard
              id={product.id}
              imgSrc={product.imgSrc}
              alt={product.alt}
              brand={product.brand}
              model={product.model}
              price={product.price}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
