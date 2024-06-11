// "use client";
import React, { useState } from "react";
import { ProductProps } from "types";
import Image from "next/image";
import Link from "next/link";
import Card from "components/Card";
import StarRating from "components/StarRating";
import ButtonsGroup from "./ButtonsGroup";
import Button from "components/Button";

const Product = ({ productData }: ProductProps) => {
  const { image, price, rating, title, category, id } = productData;
  const addToCart = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number
  ) => {
    e.stopPropagation();
    console.log(id);
  };

  return (
    <Card className="relative my-2 border border-[#ddd] cursor-pointer !p-0 image-backdrop transition-all duration-500 ease-in-out">
      <div className="relative flex items-center justify-center aspect-square md:p-4">
        <Image src={image} alt={title} width={280} height={357} />
        <div className="absolute flex items-center justify-center w-full h-full rounded-lg rounded-b-none opacity-0 back">
          <ButtonsGroup id={id} />
        </div>
      </div>
      <div className="p-4 text-center product-details">
        <Link href={`/shop/${category}/${id}`}>
          <h3 className="my-2 font-semibold truncate hover:text-red-light">
            {title}
          </h3>
        </Link>
        <p className="font-medium text-red-light">
          ${price}{" "}
          <del className="font-normal text-gray-400">${price - 20}</del>
        </p>
        <StarRating rate={rating?.rate} count={rating?.count} />
      </div>
      <div className="absolute left-0 flex items-center justify-center w-full bg-white h-[65px] opacity-0 bottom-0 add-to-cart z-[100] rounded-xl">
        <Button
          variant="primary"
          className="my-auto"
          onClick={(e) => addToCart(e, id)}
        >
          Add to cart
        </Button>
      </div>
    </Card>
  );
};

export default Product;
