import { useState } from "react";

import { Dialog, Transition } from "lib/@headlessUi";
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "lib/@heroicons";

import { useScrollPosition } from "../../hooks";
import { Logo } from "components";

import Navlinks from "../Navlinks";
import clsx from "clsx";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollPosition = useScrollPosition();

  return (
    <header
      className={clsx(
        scrollPosition > 0
          ? "bg-gray-dark shadow-md"
          : "bg-transparent shadow-none",
        "fixed w-full top-0 z-10 "
      )}
    >
      <nav
        className="container flex items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        <Logo />
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="w-6 h-6 text-white" aria-hidden="true" />
          </button>
        </div>
        <div className="items-center hidden lg:flex lg:gap-x-12">
          <Navlinks />
        </div>
        <div className="hidden gap-3 lg:flex lg:flex-1 lg:justify-end">
          <MagnifyingGlassIcon width={30} height={30} color="white" />
          <ShoppingCartIcon width={30} height={30} color="white" />
        </div>
      </nav>
      <Transition show={mobileMenuOpen}>
        <Dialog
          as="div"
          className="lg:hidden "
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full px-6 py-6 overflow-y-auto text-white bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-end">
              <button
                type="button"
                className=" rounded-md p-2.5 text-gray-700 !cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                <XMarkIcon
                  className="w-6 h-6 cursor-pointer"
                  aria-hidden="true"
                />
              </button>
            </div>
            <div className="flow-root mt-6 ">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="flex justify-around py-6">
                  <MagnifyingGlassIcon
                    width={30}
                    height={30}
                    className="text-gray-900"
                  />
                  <ShoppingCartIcon
                    width={30}
                    height={30}
                    className="text-gray-900"
                  />
                </div>
                <div className="py-6 space-y-2">
                  <Navlinks navlinkClass="!text-gray-900" />
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </Transition>
    </header>
  );
}
