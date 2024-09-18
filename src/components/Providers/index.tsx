"use client";
import React from "react";
import { Children } from "types";
import { TanstackQueryProvider } from "./TanstackQuery";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const Providers = ({ children }: { children: Children }) => {
  return (
    <TanstackQueryProvider>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </TanstackQueryProvider>
  );
};

export default Providers;
