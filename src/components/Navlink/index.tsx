import clsx from "clsx";
import { NavlinkProps } from "components/types";
import Link from "next/link";

const Navlink = ({ href, className, children }: NavlinkProps) => {
  const navlinkClasses = clsx(
    "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-gray-900 ",
    className
  );
  return (
    <Link href={href} className={navlinkClasses}>
      {children}
    </Link>
  );
};
export default Navlink;
