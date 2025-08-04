import { Meta, StoryObj } from "@storybook/nextjs";
import { ProfileAvatar } from "./profile-avatar";

const meta: Meta<typeof ProfileAvatar> = {
  title: "Atoms/Profile Avatar",
  component: ProfileAvatar,
};

export default meta;

type Story = StoryObj<typeof ProfileAvatar>;

export const Default: Story = {
  args: {
    image: "/images/profile-min.png",
    name: "Najam Iftikhar",
    bio: "Senior Software Engineer at Swiss Strategic Development Group AG",
  },
};
