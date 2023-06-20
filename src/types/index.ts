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

export type productRatingType = { rate: number, count: number }
export interface Product { id: number, title: string, price: number, description: string, category: string, image: string, rating: productRatingType }
export type ProductProps = { productData: Product, link?: string }