import type { Meta, StoryObj } from "@storybook/nextjs";
import { Button } from "./button";
import { Download, Heart, Mail, Plus, Settings, Trash2 } from "lucide-react";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="default">Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon">
        <Settings className="h-4 w-4" />
      </Button>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button>
        <Download className="h-4 w-4" />
        Download
      </Button>
      <Button variant="outline">
        <Mail className="h-4 w-4" />
        Send Email
      </Button>
      <Button variant="secondary">
        <Plus className="h-4 w-4" />
        Add Item
      </Button>
      <Button variant="destructive">
        <Trash2 className="h-4 w-4" />
        Delete
      </Button>
      <Button variant="ghost">
        <Heart className="h-4 w-4" />
        Like
      </Button>
    </div>
  ),
};

export const IconOnly: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="icon" variant="default">
        <Settings className="h-4 w-4" />
      </Button>
      <Button size="icon" variant="outline">
        <Download className="h-4 w-4" />
      </Button>
      <Button size="icon" variant="secondary">
        <Plus className="h-4 w-4" />
      </Button>
      <Button size="icon" variant="destructive">
        <Trash2 className="h-4 w-4" />
      </Button>
      <Button size="icon" variant="ghost">
        <Heart className="h-4 w-4" />
      </Button>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button disabled>Default Disabled</Button>
      <Button variant="destructive" disabled>
        Destructive Disabled
      </Button>
      <Button variant="outline" disabled>
        Outline Disabled
      </Button>
      <Button variant="secondary" disabled>
        Secondary Disabled
      </Button>
      <Button variant="ghost" disabled>
        Ghost Disabled
      </Button>
      <Button variant="link" disabled>
        Link Disabled
      </Button>
    </div>
  ),
};

export const Loading: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button loading>Loading...</Button>
      <Button variant="destructive" loading>
        Deleting
      </Button>
      <Button variant="outline" loading>
        Processing
      </Button>
      <Button variant="secondary" loading>
        Submitting
      </Button>
      <Button variant="ghost" loading>
        Updating
      </Button>
      <Button variant="link" loading>
        Connecting
      </Button>
    </div>
  ),
};
