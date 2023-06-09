import Card from "components/Card";
import React from "react";
import { ProductProps } from "types";
import Image from "next/image";
const Product = ({ productData }: ProductProps) => {
  console.log("🚀 ~ file: index.tsx:4 ~ Product ~ productData:", productData);

  return (
    <Card className="md:w-1/4 mx-4 my-2 border border-[#ddd]">
      <div className="">
        <div className="w-full aspect-square md:p-4">
          <Image
            src={productData?.image}
            alt={productData?.title}
            width={300}
            height={357}
          />
        </div>
      </div>
    </Card>
  );
};

export default Product;
