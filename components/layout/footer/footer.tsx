import Link from "next/link";
import { Box } from "@/components/containers/box/box";
import { ThemeToggle } from "@/components/theme/theme-toggle/theme-toggle";
import { IconMapper } from "@/components/icon-mapper/icon-mapper";
import { footerLinks, socialLinks } from "@/data/data";

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

          {footerLinks.map((link) => (
            <div key={link.category}>
              <h4 className="font-semibold text-base">{link.category}</h4>
              <div className="flex flex-col">
                {link.links.map((link) => (
                  <Link
                    href={link.link}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                    key={link.name}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div className="space-y-4">
            <h4 className="font-semibold text-base">Connect</h4>
            <div className="flex gap-6">
              {socialLinks.map((link) => (
                <a href={link.link} target="_blank" key={link.name}>
                  <IconMapper iconName={link.icon} size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Najam Iftikhar. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex-col lg:flex-row flex items-center gap-3">
            <span className="inline-block">
              Built with Next.js, TypeScript, Tailwind CSS & shadcn/ui
            </span>
            <ThemeToggle />
          </p>
        </div>
      </Box>
    </footer>
  );
};
