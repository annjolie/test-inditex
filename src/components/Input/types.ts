export type InputProps = {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  type?: string;
  isHeader?: boolean;
  className?: string;
};

export type InputStyledProps = {
  isHeader?: InputProps['isHeader'];
};
