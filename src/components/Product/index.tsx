import React from "react";
import { ProductProps } from "types";
import Image from "next/image";
import Link from "next/link";
import Card from "components/Card";
import StarRating from "components/StarRating";

export const Product = ({ productData, link = "#" }: ProductProps) => {
  const { image, price, rating, title } = productData;
  return (
    // <Link href={link}>
    <Card className=" mx-4 my-2 border border-[#ddd] transition-all cursor-pointer p-0">
      <div className="">
        <div className="relative flex items-center justify-center aspect-square md:p-4 ">
          {image ? (
            <Image src={image} alt={title} width={280} height={357} />
          ) : (
            <Image
              src="/assets/img/product_placeholder.jpg"
              alt={title}
              width={280}
              height={357}
            />
          )}
          <div className="absolute flex items-center justify-center w-full h-full rounded-lg rounded-b-none hover:backdrop-brightness-75"></div>
        </div>
        <div className="p-4 text-center product-details">
          <h3 className="my-2 font-semibold truncate">{title}</h3>
          <p className="font-medium text-red-light">
            ${price}{" "}
            <del className="font-normal text-gray-400">${price - 20}</del>
          </p>
          <StarRating rate={rating?.rate} count={rating?.count} />
        </div>
      </div>
    </Card>
    // </Link>
  );
};

export default Product;
