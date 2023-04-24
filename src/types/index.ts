import { NextPage } from "next";
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