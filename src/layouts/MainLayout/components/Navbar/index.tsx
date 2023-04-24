import { useState } from "react";
import { Dialog, Transition } from "lib/@headlessUi";
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "lib/@heroicons";
import Image from "next/image";
import Logo from "../../../../../public/assets/img/logo_light.png";
import { useScrollPosition } from "layouts/MainLayout/hooks";
import { Dropdown, Link } from "components";
import { Children } from "types";
import { NAV_CALLS_TO_ACTIONS, NAV_PRODUCTS } from "layouts/MainLayout/data";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollPosition = useScrollPosition();

  return (
    <header
      className={classNames(
        scrollPosition > 0
          ? "bg-gray-dark shadow-md"
          : "bg-transparent shadow-none",
        "fixed w-full top-0 z-10  transition-all"
      )}
    >
      <nav
        className=" flex container items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              className="h-8 w-auto"
              width={138}
              height={47}
              src={Logo}
              alt="logo"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6 text-white" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex items-center lg:gap-x-12">
          <Navlink href="#">Home</Navlink>
          <Navlink href="#">Shop</Navlink>
          <Dropdown
            items={NAV_PRODUCTS}
            title="Products"
            callsToAction={NAV_CALLS_TO_ACTIONS}
          />

          <Navlink href="#">Blog</Navlink>
          <Navlink href="#">Contact us</Navlink>
        </div>
        <div className="hidden lg:flex lg:flex-1 gap-3 lg:justify-end">
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
          <div className="fixed inset-0 z-20 " />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white text-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-end">
              <button
                type="button"
                className=" rounded-md p-2.5 text-gray-700 !cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                <XMarkIcon
                  className="h-6 w-6 cursor-pointer"
                  aria-hidden="true"
                />
              </button>
            </div>
            <div className="mt-6 flow-root ">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Navlink href="#" className=" !text-gray-900">
                    Home
                  </Navlink>
                  <Navlink href="#" className=" !text-gray-900">
                    Shop
                  </Navlink>
                  <Dropdown
                    items={NAV_PRODUCTS}
                    title="Products"
                    callsToAction={NAV_CALLS_TO_ACTIONS}
                    className="!text-gray-900"
                  />

                  <Navlink href="#" className=" !text-gray-900">
                    Blog
                  </Navlink>
                  <Navlink href="#" className=" !text-gray-900">
                    Contact us
                  </Navlink>
                </div>
                <div className="py-6">
                  <MagnifyingGlassIcon width={30} height={30} />
                  <ShoppingCartIcon width={30} height={30} />
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </Transition>
    </header>
  );
}

export const Navlink = ({
  href,
  className,
  children,
}: {
  href: string;
  children: Children;
  className?: string;
}) => {
  return (
    <Link
      href={href}
      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-gray-900 ${
        className ?? ""
      }`}
    >
      {children}
    </Link>
  );
};
