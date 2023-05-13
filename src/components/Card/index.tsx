import clsx from "clsx";
import React from "react";

const Card = ({
  children,
  className,
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const classes = clsx("rounded-lg bg-white shadow-md p-4", className);
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default Card;
