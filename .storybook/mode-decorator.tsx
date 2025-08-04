import React from "react";
import { ThemeProvider } from "../components/theme/theme-provider";
import { ThemeToggle } from "../components/theme/theme-toggle/theme-toggle";

export const ModeDecorator = (Story: any) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <Story />
    </ThemeProvider>
  );
};
