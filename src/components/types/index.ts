import { StaticImageData } from "next/image";
import React from "react";
import { Children } from "types";

export type DropdownItemsType = {
  name: string;
  description?: string;
  href?: string;
  icon?: any;
};

export type callsToActionType = {
  name: string;
  href?: string;
  icon?: any;
};

export interface DropdownType {
  title: string;
  items: DropdownItemsType[];
  callsToAction?: callsToActionType[];
  className?: string;
}
export interface LinkType {
  href: string;
  children: Children;
  className?: string;
}

export interface ButtonOptions {
  /**
   * Button display variants
   * @default ""
   * @type ButtonVariant
   */
  variant?: ButtonVariant;
}

export type RefType = HTMLButtonElement;

export type ButtonVariant = "outline" | "primary" | "secondary" | "";

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  ButtonOptions;

export type slideType = {
  image: string;
  content: {
    badge: string;
    heading: string;
    paragraph: string;
  };
};
type breakpointsType = {
  [breakpoint: number]: {
    slidesPerView: number;
    spaceBetween?: number;
  };
};
export interface SliderProps {
  slides: slideType[] | any[];
  slideShape: (slide: any, index: number) => Children;
  className?: string;
  slidesPerView?: number;
  spaceBetween?: number;
  navigation?: {} | boolean;
  pagination?: any;
  onSwiper?: Function;
  onSlideChange?: Function;
  cssMode?: boolean;
  mousewheel?: boolean;
  keyboard?: boolean;
  modules?: [];
  lazyPreloadPrevNext?: number;
  loop?: boolean;
  breakpoints?: breakpointsType;
  speed?: number;
  effect?:
    | "fade"
    | "slide"
    | "cube"
    | "coverflow"
    | "flip"
    | "creative"
    | "cards"
    | undefined;
}

export type ImageGridType = {
  title?: string;
  size?: string;
  source: string;
  link: string;
};
export interface ImageGridProps {
  files: ImageGridType[];
}

export type LogoType = {
  src?: StaticImageData;
  alt?: string;
  className?: string;
};

export type NavlinkProps = {
  href: string;
  children: Children;
  className?: string;
};

export type StarRatingProps = {
  rate: number;
  count: number | string;
  starsNumber?: number;
  className?: string;
  readOnly?: boolean;
};
