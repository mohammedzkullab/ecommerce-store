import dynamic from "next/dynamic";
import type { Children } from "types";

const NoSsr = ({ children }: { children: Children }) => <>{children}</>;

export default dynamic(() => Promise.resolve(NoSsr), {
  ssr: false,
});
