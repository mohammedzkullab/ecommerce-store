import { ButtonVariant } from "components/types";

export const getVariant = (variant: ButtonVariant) => {
    switch (variant) {
        case "outline":
            return "btn-outline";
        case "secondary":
            return "btn-secondary";
        case "primary":
            return "btn-primary";
        default:
            return undefined
    }
};