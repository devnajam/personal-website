import type { Meta, StoryObj } from "@storybook/nextjs";
import { ProfileBanner } from "./profile-banner";

const meta: Meta<typeof ProfileBanner> = {
  title: "Atoms/Profile Banner",
  component: ProfileBanner,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Less is more.",
  },
};
