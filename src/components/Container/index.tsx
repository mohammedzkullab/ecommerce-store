import clsx from "clsx";
import React from "react";

const Container = ({ children, className }: any) => {
  const classes = clsx("container", "max-md:px-4", className);
  return <div className={classes}>{children}</div>;
};

export default Container;
