import { css } from 'styled-components';

export const fonts = css`
  @font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter/Inter-Regular.woff2') format('woff2'), url('/fonts/Inter/Inter-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter/Inter-Medium.woff2') format('woff2'), url('/fonts/Inter/Inter-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter/Inter-SemiBold.woff2') format('woff2'),
      url('/fonts/Inter/Inter-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter/Inter-Bold.woff2') format('woff2'), url('/fonts/Inter/Inter-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
`;
