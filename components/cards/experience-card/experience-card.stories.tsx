import type { Meta, StoryObj } from "@storybook/nextjs";
import { ExperienceCard } from "./experience-card";

const meta: Meta<typeof ExperienceCard> = {
  title: "Cards/Experience Card",
  component: ExperienceCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    company: "Swiss Strategic Development Group AG - Zurich, Switzerland",
    position: "Senior Software Engineer",
    startDate: "February 2025",
    endDate: "Present",
    mode: "Remote",
    bullets: [
      "Developed 4+ full-stack sites using Next.js and Three.js, and designed reusable UI libraries for consistent UX.",
      "Integrated Stripe and Zapier into Next.js apps, cutting manual ops by 50% and streamlining global payments.",
      "Scraped 4+ sites, extracting 800K+ leads via Python and Node.js, boosting outreach efficiency by 50%.",
      "Built DevOps pipelines and VPS with Docker, GitHub Actions, Nginx, and PM2, ensuring 99.9% uptime.",
    ],
  },
};
