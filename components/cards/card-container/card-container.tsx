import { cn } from "@/lib/utils";

interface CardContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardContainer = (props: CardContainerProps) => {
  return (
    <div
      className={cn(
        "bg-muted p-4 lg:p-8 rounded-md lg:rounded-xl",
        props.className
      )}
    >
      {props.children}
    </div>
  );
};
