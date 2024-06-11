"use client";
import { Button, Link } from "components";
import { useScrollPosition } from "layouts/MainLayout/hooks";
import { ChevronDownIcon } from "lib/@heroicons";
const ReturnTop = () => {
  const scrollPosition = useScrollPosition();
  function scrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  return (
    <Button
      onClick={scrollToTop}
      variant=""
      className={`${
        scrollPosition > 90 ? "block" : "hidden"
      } fixed right-8 bottom-8 border-none p-2 bg-black text-white`}
    >
      <ChevronDownIcon width={30} height={30} className="rotate-180" />
    </Button>
  );
};

export default ReturnTop;
