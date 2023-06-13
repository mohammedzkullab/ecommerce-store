import Card from "components/Card";
import React from "react";
import { ProductProps } from "types";
import Image from "next/image";
import StarRating from "components/StarRating";
const Product = ({ productData }: ProductProps) => {
  const { image, price, rating, title } = productData;
  return (
    <Card className=" mx-4 my-2 border border-[#ddd] transition-all p-0">
      <div className="">
        <div className="relative flex items-center justify-center aspect-square md:p-4 ">
          <Image src={image} alt={title} width={280} height={357} />
          <div className="absolute flex items-center justify-center w-full h-full rounded-lg rounded-b-none hover:backdrop-brightness-75"></div>
        </div>
        <div className="p-4 product-details">
          <h3 className="my-2 font-semibold truncate">{title}</h3>
          <p className="font-medium text-red-light">
            ${price}{" "}
            <del className="font-normal text-gray-400">${price - 20}</del>
          </p>
          <StarRating rate={rating?.rate} count={rating?.count} />
        </div>
      </div>
    </Card>
  );
};

export default Product;
