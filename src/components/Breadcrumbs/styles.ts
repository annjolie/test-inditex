import styled from 'styled-components';
import { Breadcrumbs } from '@material-ui/core';

export const BreadcrumbsWrapper = styled(Breadcrumbs)`
  a,
  .MuiBreadcrumbs-separator {
    color: ${({ theme }) => theme.colors.primary.white};
  }

  li:last-child a {
    cursor: default;
  }

  li:not(:last-child) a:hover {
    color: ${({ theme }) => theme.colors.primary.info};
    transition: color 0.2s;
  }
`;
