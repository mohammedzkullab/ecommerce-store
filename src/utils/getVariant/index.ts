import { ButtonVariant } from "types";

export const getVariant = (variant: ButtonVariant) => {
    switch (variant) {
        case "outline":
            return "btn-outline";
        case "secondary":
            return "btn-secondary";
        default:
            return undefined;
    }
};