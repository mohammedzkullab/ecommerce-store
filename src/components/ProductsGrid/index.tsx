import { Product, Container } from "components";
import React from "react";
import { ProductType } from "types";

const ProductsGrid = ({ products }: { products: ProductType[] }) => {
  return (
    <Container className="pb-[30px] md:pb-[70px]">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products?.map((product: ProductType) => (
          <Product key={product?.id} productData={product} />
        ))}
      </div>
    </Container>
  );
};

export default ProductsGrid;
