import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "components";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Click Me ! ",
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Button>;

const Template = (args: Story) => <Button {...args} />;

export const PrimaryVariant: any = Template.bind({});
PrimaryVariant.args = {
  variant: "primary",
};

export const SecondaryVariant: any = Template.bind({});
SecondaryVariant.args = {
  variant: "secondary",
};

export const OutlineVariant: any = Template.bind({});
OutlineVariant.args = {
  variant: "outline",
};
