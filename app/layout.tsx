import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Navbar } from "@/components/layout/navbar/navbar";

import "./globals.css";

export const metadata: Metadata = {
  title: "Najam Iftikhar | Senior Software Engineer",
  description:
    "Senior Full Stack Developer with 4+ years of experience delivering 25+ web apps and 5 MVPs that accelerated product validation by 50%. Completed 48 self-employed projects with a perfect 5-star client rating. Scraped 800K+ leads to boost outreach by 60% and improved delivery speed by 50% through DevOps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
