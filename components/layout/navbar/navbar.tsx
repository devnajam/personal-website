import Link from "next/link";
import {
  FaLinkedin,
  FaXTwitter,
  FaGithub,
  FaDownload,
  FaBars,
} from "react-icons/fa6";
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
      <Box className="h-14 xl:h-20 flex justify-between items-center" size="xl">
        <div className="flex gap-8 items-center">
          <h1 className="text-xl font-bold">Najam Iftikhar</h1>
          <div className="gap-5 text-sm hidden xl:flex">
            <Link href="/#skills">Skills</Link>
            <Link href="/#experience">Experience</Link>
            <Link href="/#projects">Projects</Link>
            <Link href="/#education">Education</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/#contact">Contact</Link>
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
                  <Link href="/#projects" className="w-full">
                    Projects
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/#education" className="w-full">
                    Education
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
