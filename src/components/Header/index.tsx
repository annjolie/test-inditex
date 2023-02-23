import React from 'react';
import type { HeaderProps } from './types';
import { Container, Logo, BagIcon, Text, FirstRow, Separator, SecondRow } from './styles';
import NextLink from 'next/link';

export default function Header({ imgSrc, numberOfItems, className }: HeaderProps): JSX.Element {
  return (
    <Container className={className}>
      <FirstRow>
        <NextLink href="/">
          <Logo src={imgSrc} />
        </NextLink>
        <NextLink href="/">
          {numberOfItems && (
            <>
              <BagIcon size={20} />
              <Text>{numberOfItems}</Text>
            </>
          )}
        </NextLink>
      </FirstRow>
      <Separator />
      <SecondRow></SecondRow>
    </Container>
  );
}
