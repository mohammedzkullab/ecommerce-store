import type { Meta, StoryObj } from "@storybook/react";

import { ProductsGrid } from ".";
import { productDummyData } from "data/dummy/dummyProduct";

const meta: Meta<typeof ProductsGrid> = {
  title: "Components/ProductsGrid",
  component: ProductsGrid,
  tags: ["autodocs"],
  args: {
    products: [
      productDummyData,
      productDummyData,
      productDummyData,
      productDummyData,
      productDummyData,
    ],
  },
};

export default meta;
type Story = StoryObj<typeof ProductsGrid>;

const Template = (args: Story) => <ProductsGrid {...args} />;

export const PrimaryVariant: any = Template.bind({});
