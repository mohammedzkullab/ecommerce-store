import { Link } from "components";
import { useScrollPosition } from "layouts/MainLayout/hooks";
import { ChevronDownIcon } from "lib/@heroicons";
const ReturnTop = () => {
  const scrollPosition = useScrollPosition();

  return (
    <Link
      href="#"
      className={`${
        scrollPosition > 90 ? "block" : "hidden"
      } fixed right-8 bottom-8 transition-all text-white p-2 bg-black`}
    >
      <ChevronDownIcon width={30} height={30} className="rotate-180" />
    </Link>
  );
};

export default ReturnTop;
