import { StaticImageData } from "next/image";
import React from "react";
import { Children } from "types";


export type DropdownItemsType = {
    name: string;
    description?: string;
    href?: string;
    icon?: any
}

export type callsToActionType = {
    name: string;
    href?: string;
    icon?: any
}

export interface DropdownType {
    title: string,
    items: DropdownItemsType[],
    callsToAction?: callsToActionType[],
    className?: string
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
    },
}
export interface SliderProps {
    slides: slideType[];
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
}

export type NavlinkProps = {
    href: string;
    children: Children;
    className?: string;
}