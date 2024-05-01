import { Fragment } from "react";
import { Popover, Transition } from "lib/@headlessUi";
import { ChevronDownIcon } from "lib/@heroicons";
import {
  DropdownItemsType,
  DropdownType,
  callsToActionType,
} from "components/types";

export const Dropdown = ({
  title,
  items,
  callsToAction,
  className,
  ...rest
}: DropdownType) => {
  return (
    <Popover.Group className={`text-white ${className}`} {...rest}>
      <Popover className="relative">
        <Popover.Button className="flex items-center text-sm font-semibold leading-6 outline-none gap-x-1 ">
          {title}
          <ChevronDownIcon
            className="flex-none w-5 h-5 text-gray-400"
            aria-hidden="true"
          />
        </Popover.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="absolute z-10 w-screen max-w-md mt-3 overflow-hidden bg-white shadow-lg -left-8 top-full rounded-3xl ring-1 ring-gray-900/5">
            <div className="p-4">
              {items.length > 0 ? (
                items?.map((item: DropdownItemsType) => (
                  <div
                    key={item.name}
                    className="relative flex items-center p-4 text-sm leading-6 rounded-lg group gap-x-6 hover:bg-gray-50"
                  >
                    <div className="flex items-center justify-center flex-none rounded-lg h-11 w-11 bg-gray-50 group-hover:bg-white">
                      <item.icon
                        className="w-6 h-6 text-gray-600 group-hover:text-indigo-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block font-semibold text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))
              ) : (
                <>No items !</>
              )}
            </div>
            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
              {callsToAction?.map((item: callsToActionType) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                >
                  <item.icon
                    className="flex-none w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                  {item.name}
                </a>
              ))}
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </Popover.Group>
  );
};

export default Dropdown;
