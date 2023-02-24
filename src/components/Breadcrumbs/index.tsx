import React from 'react';
import type { BreadcrumbsProps } from './types';
import { Link } from '@material-ui/core';
import { BreadcrumbsWrapper } from './styles';
export default function BreadcrumbsComponent({ links }: BreadcrumbsProps): JSX.Element {
  return (
    <BreadcrumbsWrapper aria-label="breadcrumb">
      {links.map((link) => (
        <Link key={link.label} underline="none" color='primary' href={link.href}>
          {link.label}
        </Link>
      ))}
    </BreadcrumbsWrapper>
  );
}
