import { LinkType } from "components/types";
import NextLink from "next/link";

const Link = ({ href = "#", children, className, ...rest }: LinkType) => {
  return (
    <NextLink href={href} className={className} {...rest}>
      {children}
    </NextLink>
  );
};

export default Link;
