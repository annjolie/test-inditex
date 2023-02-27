import React from 'react';
import type { HeaderProps } from './types';
import { Container, Logo, BagIcon, Text, FirstRow, SecondRow } from './styles';
import NextLink from 'next/link';
import BreadcrumbsComponent from '../Breadcrumbs';
import Input from '../Input';

export default function Header({
  numberOfItems,
  links,
  value,
  onChange,
  className,
  options,
}: HeaderProps): JSX.Element {
  return (
    <Container className={className}>
      <FirstRow>
        <NextLink href="/">
          <Logo src="/assets/styleapp.png" />
        </NextLink>
        <NextLink href="/">
          <BagIcon size={20} />
          {numberOfItems > 0 && <Text>{numberOfItems}</Text>}
        </NextLink>
      </FirstRow>
      <SecondRow>
        <BreadcrumbsComponent links={links} />
        <Input
          label="Search"
          id="input-search"
          sizes="small"
          value={value}
          onChange={onChange}
          isHeader={true}
          type="search"
          options={options}
        />
      </SecondRow>
    </Container>
  );
}
