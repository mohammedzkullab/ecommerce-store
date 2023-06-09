import Image from "next/image";
import clsx from "clsx";

import LogoPath from "@/public/assets/img/logo_light.png";

import { LogoType } from "components/types";

const Logo = ({ src = LogoPath, alt = "Store Logo", className }: LogoType) => {
  const logoClasses = clsx("h-8 w-auto", className);
  return (
    <div className="flex lg:flex-1">
      <a href="#" className="-m-1.5 p-1.5">
        <span className="sr-only">Store Logo</span>
        <Image
          className={logoClasses}
          width={138}
          height={55}
          priority={true}
          src={src}
          alt={alt}
        />
      </a>
    </div>
  );
};

export default Logo;
