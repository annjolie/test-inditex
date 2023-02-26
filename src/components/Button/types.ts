import type { MouseEvent, ReactNode } from 'react';

export type ButtonProps = { 
    label: string;
    className?: string;
    size?: 'small' | 'medium';
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export type $ContainerProps = {
    $size: ButtonProps['size'];
  };