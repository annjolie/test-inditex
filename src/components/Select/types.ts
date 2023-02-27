import { ReactEventHandler } from "react";

export type SelectProps = {
  label?: string;
  options: SelectOptionProps[];
  onSelect: (option: SelectOptionProps) => void;
  value: SelectOptionProps;
};

export type SelectOptionProps = {
  id: string;
  label: string;
};
