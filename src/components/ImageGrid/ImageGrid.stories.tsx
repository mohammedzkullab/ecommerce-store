import type { Meta, StoryObj } from "@storybook/react";

import ImageGrid from ".";
import { dummyImageGrid } from "data/dummy/dummyImageGrid";

const meta: Meta<typeof ImageGrid> = {
  title: "Components/ImageGrid",
  component: ImageGrid,
  tags: ["autodocs"],
  args: {
    files: dummyImageGrid,
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ImageGrid>;

const Template = (args: Story) => <ImageGrid {...args} />;

export const PrimaryVariant: any = Template.bind({});

export const MobileVariant: any = Template.bind({});
MobileVariant.parameters = {
  viewport: {
    defaultViewport: "IPHONE_14",
  },
};
