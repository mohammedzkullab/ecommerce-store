"use client";
import React from "react";
import { Children } from "types";
import { TanstackQueryProvider } from "./TanstackQuery";

export const Providers = ({ children }: { children: Children }) => {
  return <TanstackQueryProvider>{children}</TanstackQueryProvider>;
};

export default Providers;
