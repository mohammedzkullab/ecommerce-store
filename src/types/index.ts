import { NextPage } from "next";
import { type } from "os";
import type {
    ReactElement,
    ReactNode,
    HTMLProps,
    ElementType,
    PropsWithChildren,
    ComponentPropsWithoutRef,
} from "react";
import React from "react";

export type Children = ReactNode;

export interface MainLayoutProps {
    children: Children;
    title: string
    pageDescription?: string;
    mainClassName?: string;

}

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getNestedLayout?: (page: ReactElement) => ReactNode;
    mainLayoutProps?: Omit<MainLayoutProps, "children">;
};

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
     * @default "solid"
     * @type ButtonVariant
     */
    variant?: ButtonVariant;
}

export type RefType = HTMLButtonElement;

export type ButtonVariant = "outline" | "primary" | "secondary";

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
}