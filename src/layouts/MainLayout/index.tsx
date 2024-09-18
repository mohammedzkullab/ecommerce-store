"use client";
import { Transition } from "lib/@headlessUi";
import { Footer, Navbar, ReturnTop } from "./components";
import { MainLayoutProps } from "types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const MainLayout = ({ children, mainClassName }: MainLayoutProps) => {
  return (
    <Transition
      show
      appear
      enter="transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="relative min-h-fit scroll-smooth">
        <Navbar />
        <main className={`${mainClassName ?? ""} pb-16`}>{children}</main>
        <ReturnTop />
        <Footer />
      </div>
    </Transition>
  );
};

export default MainLayout;
