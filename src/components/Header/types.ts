import { LinkProp } from "../Breadcrumbs/types";
import { SelectOptionProps } from "../Select/types";

export type HeaderProps = {
  imgSrc?: string;
  numberOfItems?: number;
  links: LinkProp[];
  value: string;
  className?: string;
  options: SelectOptionProps[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
