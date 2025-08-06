import type { Meta, StoryObj } from "@storybook/nextjs";
import { ProjectCard } from "./project-card";

const meta: Meta<typeof ProjectCard> = {
  title: "Cards/Project Card",
  component: ProjectCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    year: "2023",
    title: "AuthentiChain",
    description:
      "Engineered a blockchain-based system on BSC using ERC-721, MetaMask, React, Node.js, and Solidity to fight counterfeit products by linking supply chain and customer data on-chain, enhancing traceability and authenticity.",
    skills: ["Skill 1", "Skill 2", "Skill 3"],
    githubLink: "https://github.com/user/project1",
    demoLink: "https://project1.com",
  },
};
