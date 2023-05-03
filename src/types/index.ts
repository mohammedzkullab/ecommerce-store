import { NextPage } from "next";

import type {
    ReactElement,
    ReactNode,
} from "react";


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

