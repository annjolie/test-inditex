import React from 'react';
import type { HeaderProps } from './types';
import { Container, Logo, BagIcon, Text, FirstRow, SecondRow } from './styles';
import NextLink from 'next/link';
import BreadcrumbsComponent from '../Breadcrumbs';

export default function Header({ imgSrc, numberOfItems, links, className }: HeaderProps): JSX.Element {
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
      <SecondRow>
        <BreadcrumbsComponent links={links} />
      </SecondRow>
    </Container>
  );
}
