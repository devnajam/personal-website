import Link from "next/link";
import { FaDownload, FaBars } from "react-icons/fa6";
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
import { IconMapper } from "@/components/icon-mapper/icon-mapper";
import { navbarLinks, mobileNavbarLinks, socialLinks } from "@/data/data";

export const Navbar = () => {
  return (
    <div>
      <Box className="h-14 xl:h-20 flex justify-between items-center">
        <div className="flex gap-8 items-center">
          <h1 className="text-xl font-bold">Ni.</h1>
          <div className="gap-5 text-sm hidden xl:flex">
            {navbarLinks.map((link) => (
              <Link
                key={link.name}
                href={link.link}
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="gap-5 text-sm items-center hidden xl:flex">
          {socialLinks.map((link) => (
            <a href={link.link} target="_blank" key={link.name}>
              <IconMapper iconName={link.icon} size={20} />
            </a>
          ))}

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
              {mobileNavbarLinks.map((category) => (
                <div key={category.category}>
                  <DropdownMenuGroup>
                    <DropdownMenuLabel>{category.category}</DropdownMenuLabel>
                    {category.links.map((link) => (
                      <DropdownMenuItem asChild key={link.name}>
                        <Link href={link.link} className="w-full">
                          {link.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                </div>
              ))}

              {socialLinks.map((link) => (
                <DropdownMenuItem asChild key={link.name}>
                  <a
                    href={link.link}
                    target="_blank"
                    className="flex items-center gap-2 w-full"
                  >
                    <IconMapper iconName={link.icon} size={20} />
                    {link.name}
                  </a>
                </DropdownMenuItem>
              ))}

              <DropdownMenuSeparator />

              <DropdownMenuItem asChild>
                <a href="/Najam's Resume.pdf" target="_blank">
                  <FaDownload />
                  Resume
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </Box>
    </div>
  );
};
