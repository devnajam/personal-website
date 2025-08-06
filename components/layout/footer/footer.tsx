import Link from "next/link";
import { FaLinkedin, FaXTwitter, FaGithub, FaDownload } from "react-icons/fa6";
import { Box } from "@/components/containers/box/box";
import { Button } from "@/components/ui/button";
import { SiLeetcode } from "react-icons/si";
import { ThemeToggle } from "@/components/theme/theme-toggle/theme-toggle";

export const Footer = () => {
  return (
    <footer className="border-t bg-background mt-20">
      <Box className="py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Najam Iftikhar</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Senior Software Engineer passionate about building scalable web
              applications and sharing knowledge.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-base">Professional</h4>
            <div className="flex flex-col">
              <Link
                href="/#skills"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
              >
                Skills
              </Link>
              <Link
                href="/#experience"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
              >
                Experience
              </Link>
              <Link
                href="/#projects"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
              >
                Projects
              </Link>
              <Link
                href="/#education"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
              >
                Education
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-base">Quick Links</h4>
            <div className="flex flex-col">
              <Link
                href="/blog"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
              >
                Blog
              </Link>
              <Link
                href="/#newsletter"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
              >
                Newsletter
              </Link>
              <Link
                href="/#contact"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-base">Connect</h4>
            <div className="flex gap-6">
              <a
                href="https://www.linkedin.com/in/devnajam/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://x.com/devnajam"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter size={20} />
              </a>
              <a
                href="https://github.com/devnajam"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://leetcode.com/devnajam"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiLeetcode size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Najam Iftikhar. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-3">
            <ThemeToggle />
            <span className="inline-block">
              Built with Next.js, TypeScript, Tailwind CSS & shadcn/ui
            </span>
          </p>
        </div>
      </Box>
    </footer>
  );
};
