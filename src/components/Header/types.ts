import { LinkProp } from "../Breadcrumbs/types";

export type HeaderProps = {
  imgSrc?: string;
  numberOfItems?: number;
  links: LinkProp[];
  value: string;
  className?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
