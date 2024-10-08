import { NextPage } from "next";

import type { ReactElement, ReactNode } from "react";

export type Children = ReactNode;

export interface MainLayoutProps {
  children: Children;
  mainClassName?: string;
}

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getNestedLayout?: (page: ReactElement) => ReactNode;
  mainLayoutProps?: Omit<MainLayoutProps, "children">;
};

export type productRatingType = { rate: number; count: number };
export interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: productRatingType;
}
export type ProductProps = { productData: ProductType; link?: string };

export type BlogPostData = {
  id: number;
  title: string;
  image: string;
  dateOfPublish: string; // | Fate
  commentsCount: number;
  postContent: string;
};
