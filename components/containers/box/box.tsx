import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const boxVariants = cva("px-4 mx-auto", {
  variants: {
    size: {
      sm: "max-w-4xl",
      base: "max-w-6xl",
      lg: "max-w-7xl",
      xl: "max-w-[1440px]",
    },
  },
  defaultVariants: {
    size: "base",
  },
});

export interface BoxProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof boxVariants> {}

export const Box = ({ className, size, children, ...props }: BoxProps) => {
  return (
    <div className={cn(boxVariants({ size }), className)} {...props}>
      {children}
    </div>
  );
};
