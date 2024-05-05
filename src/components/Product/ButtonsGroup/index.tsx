import React from "react";
import Button from "components/Button";
import {
  ShuffleIcon,
  HiOutlineHeart,
  MagnifyingGlassIcon,
} from "lib/@heroicons";

export const ButtonsGroup = ({ id }: { id: number }) => {
  return (
    <div className="!z-30 flex items-center justify-center w-full gap-4 px-2">
      <Button
        variant="secondary"
        type="button"
        className="!p-2 !rounded-full !duration-0"
        onClick={() => {
          console.log("shuffle", id);
        }}
      >
        <ShuffleIcon className="!text-2xl" />
      </Button>

      <Button
        variant="secondary"
        type="button"
        className="!p-2 !rounded-full !duration-0"
        onClick={() => {
          console.log("zoom", id);
        }}
      >
        <MagnifyingGlassIcon className="!text-2xl" />
      </Button>
      <Button
        variant="secondary"
        type="button"
        className="!p-2 !rounded-full !duration-0"
        onClick={() => {
          console.log("fav", id);
        }}
      >
        <HiOutlineHeart className="!text-2xl" />
      </Button>
    </div>
  );
};

export default ButtonsGroup;
