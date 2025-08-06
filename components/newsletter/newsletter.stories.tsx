import type { Meta, StoryObj } from "@storybook/nextjs";
import { Newsletter } from "./newsletter";

const meta: Meta<typeof Newsletter> = {
  title: "Sections/Newsletter",
  component: Newsletter,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
