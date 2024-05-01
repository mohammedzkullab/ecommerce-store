import type { Meta, StoryObj } from "@storybook/react";

import { Dropdown } from ".";
import {
  dummyDropdownCall,
  dummyDropdownItems,
} from "data/dummy/dummyDropdown";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  args: {
    title: "Default dropdown",
    items: dummyDropdownItems,
    className: "!text-black",
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const Template = (args: Story) => <Dropdown {...args} />;

export const PrimaryVariant: any = Template.bind({});

export const WithCTAsVariant: any = Template.bind({});
WithCTAsVariant.args = {
  callsToAction: dummyDropdownCall,
};

export const NoItemsVariant: any = Template.bind({});
NoItemsVariant.args = {
  items: [],
  className: "!text-black text-center",
};
