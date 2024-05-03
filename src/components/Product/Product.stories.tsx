import type { Meta, StoryObj } from "@storybook/react";

import { Product } from ".";
import { productDummyData } from "data/dummy/dummyProduct";

const meta: Meta<typeof Product> = {
  title: "Components/Product",
  component: Product,
  tags: ["autodocs"],
  args: {
    productData: productDummyData,
  },
};

export default meta;
type Story = StoryObj<typeof Product>;

const Template = (args: Story) => <Product {...args} />;

export const PrimaryVariant: any = Template.bind({});
