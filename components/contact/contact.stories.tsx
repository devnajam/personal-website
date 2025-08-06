import type { Meta, StoryObj } from "@storybook/nextjs";
import { Contact } from "./contact";

const meta: Meta<typeof Contact> = {
  title: "Sections/Contact",
  component: Contact,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
