import { forwardRef } from "react";
import clsx from "clsx";

import { ButtonProps, RefType } from "components/types";

import { getVariant } from "utils";

export const Button = forwardRef<RefType, ButtonProps>(
  (
    { variant = "primary", type = "button", className, children, ...rest },
    ref
  ) => {
    // const {
    //   variant = "primary",
    //   type = "button",
    //   className,
    //   children,
    //   ...rest
    // } = props;

    const merged = clsx("btn", getVariant(variant), className);
    return (
      <button ref={ref} className={merged} {...rest}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
