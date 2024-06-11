"use client";
import Image from "next/image";
import clsx from "clsx";

import LogoPath from "@/public/assets/img/logo_light.png";

import { LogoType } from "components/types";
import Link from "next/link";

const Logo = ({ src = LogoPath, alt = "Store Logo", className }: LogoType) => {
  const logoClasses = clsx("h-8 w-auto", className);
  return (
    <div className="flex lg:flex-1">
      <Link href="#" className="-m-1.5 p-1.5">
        <span className="sr-only">Store Logo</span>
        <Image
          className={logoClasses}
          width={138}
          height={55}
          priority={true}
          src={src}
          alt={alt}
        />
      </Link>
    </div>
  );
};

export default Logo;
