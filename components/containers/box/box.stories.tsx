import type { Meta, StoryObj } from "@storybook/nextjs";
import { Box } from "./box";

const meta: Meta<typeof Box> = {
  title: "Atoms/Containers/Box",
  component: Box,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "This is a default box with base size",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "This is a small box (max-w-2xl)",
  },
};

export const Base: Story = {
  args: {
    size: "md",
    children: "This is a base box (max-w-3xl)",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "This is a large box (max-w-4xl)",
  },
};

export const ExtraLarge: Story = {
  args: {
    size: "xl",
    children: "This is an extra large box (max-w-5xl)",
  },
};
