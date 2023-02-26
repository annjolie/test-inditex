import React from 'react';
import type { HeaderProps } from './types';
import { Container, Logo, BagIcon, Text, FirstRow, SecondRow } from './styles';
import NextLink from 'next/link';
import BreadcrumbsComponent from '../Breadcrumbs';
import Input from '../Input';

export default function Header({ imgSrc, numberOfItems, links, value, onChange, className, options }: HeaderProps): JSX.Element {
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
        <Input label="Search" id='input-search' sizes='small' value={value} onChange={onChange} isHeader={true} type="search" options={options} />
      </SecondRow>
    </Container>
  );
}
