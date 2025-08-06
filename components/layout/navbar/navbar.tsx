import Link from "next/link";
import {
  FaLinkedin,
  FaXTwitter,
  FaGithub,
  FaDownload,
  FaBars,
} from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { Box } from "@/components/containers/box/box";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navbar = () => {
  return (
    <div>
      <Box className="h-14 xl:h-20 flex justify-between items-center">
        <div className="flex gap-8 items-center">
          <h1 className="text-xl font-bold">Ni.</h1>
          <div className="gap-5 text-sm hidden xl:flex">
            <Link
              href="/#skills"
              className="text-foreground/80 hover:text-foreground transition-colors "
            >
              Skills
            </Link>
            <Link
              href="/#experience"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Experience
            </Link>
            <Link
              href="/#education"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Education
            </Link>
            <Link
              href="/#projects"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/blog"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/#newsletter"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Newsletter
            </Link>
            <Link
              href="/#contact"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="gap-5 text-sm items-center hidden xl:flex">
          <a href="https://www.linkedin.com/in/devnajam/" target="_blank">
            <FaLinkedin size={20} />
          </a>
          <a href="https://x.com/devnajam" target="_blank">
            <FaXTwitter size={20} />
          </a>
          <a href="https://github.com/devnajam" target="_blank">
            <FaGithub size={20} />
          </a>

          <a href="https://github.com/devnajam" target="_blank">
            <SiLeetcode size={20} />
          </a>
          <a href="/Najam's Resume.pdf" target="_blank">
            <Button variant="outline" className="font-normal">
              <FaDownload />
              Resume
            </Button>
          </a>
        </div>

        <div className="xl:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <FaBars size={20} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
              <DropdownMenuLabel>Professional</DropdownMenuLabel>
              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <Link href="/#skills" className="w-full">
                    Skills
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/#experience" className="w-full">
                    Experience
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/#education" className="w-full">
                    Education
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/#projects" className="w-full">
                    Projects
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <Link href="/blog" className="w-full">
                    Blog
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/#newsletter" className="w-full">
                    Newsletter
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/#contact" className="w-full">
                    Contact
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <a
                  href="https://github.com/devnajam"
                  target="_blank"
                  className="flex items-center gap-2 w-full"
                >
                  <FaGithub size={20} /> GitHub
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a
                  href="https://x.com/devnajam"
                  target="_blank"
                  className="flex items-center gap-2 w-full"
                >
                  <FaXTwitter size={20} /> Twitter
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a
                  href="https://www.linkedin.com/in/devnajam/"
                  target="_blank"
                  className="flex items-center gap-2 w-full"
                >
                  <FaLinkedin size={20} /> LinkedIn
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a
                  href="https://leetcode.com/u/devnajam/"
                  target="_blank"
                  className="flex items-center gap-2 w-full"
                >
                  <SiLeetcode size={20} /> LeetCode
                </a>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <a
                  href="/Najam's Resume.pdf"
                  target="_blank"
                  className="flex items-center gap-2 w-full"
                >
                  <FaDownload size={20} /> Resume
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </Box>
    </div>
  );
};
