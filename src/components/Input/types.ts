import { SelectOptionProps } from "../Select/types";

export type InputProps = {
  id: string;
  options: SelectOptionProps[];
  sizes?: 'small' | 'medium';
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  type?: string;
  isHeader?: boolean;
  className?: string;
};

export type InputStyledProps = {
  $isHeader?: InputProps['isHeader'];
};