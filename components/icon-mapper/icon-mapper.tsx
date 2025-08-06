import { cn } from "@/lib/utils";
import React from "react";
import { IconBaseProps } from "react-icons";
import * as Fa6 from "react-icons/fa6";
import * as Lu from "react-icons/lu";
import * as Si from "react-icons/si";

interface IconMapperProps extends Omit<IconBaseProps, "children"> {
  iconName: string;
  size?: number;
  color?: string;
  className?: string;
}

const ICON_LIBRARIES = {
  fa6: Fa6,
  lu: Lu,
  si: Si,
} as const;

export const IconMapper: React.FC<IconMapperProps> = ({
  iconName,
  size = 24,
  className = "",
  ...rest
}) => {
  const [library = "fa6", icon = iconName] = iconName.includes(":")
    ? iconName.split(":")
    : [undefined, iconName];

  const iconLibrary =
    ICON_LIBRARIES[library as keyof typeof ICON_LIBRARIES] ||
    ICON_LIBRARIES.fa6;
  const IconComponent = iconLibrary[
    icon as keyof typeof iconLibrary
  ] as React.ComponentType<IconBaseProps>;

  if (!IconComponent) {
    return (
      <span className={className} title={`Icon ${iconName} not found`}></span>
    );
  }

  return (
    <IconComponent
      size={size}
      className={cn(
        "text-foreground/70 transition-colors hover:text-foreground",
        className
      )}
      {...rest}
    />
  );
};
