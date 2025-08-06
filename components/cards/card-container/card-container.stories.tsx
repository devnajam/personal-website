import type { Meta, StoryObj } from "@storybook/nextjs";
import { CardContainer } from "./card-container";

const meta: Meta<typeof CardContainer> = {
  title: "Atoms/Containers/Card Container",
  component: CardContainer,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <h3 className="text-lg font-semibold mb-2">Card Container</h3>
        <p className="text-muted-foreground">
          This is a default card container with standard padding and rounded
          corners. It provides a clean, elevated surface for content.
        </p>
      </div>
    ),
  },
};
