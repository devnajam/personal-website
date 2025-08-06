interface Props {
  children: React.ReactNode;
}

export const ProfileBanner = ({ children }: Props) => {
  return (
    <div className="p-4 text-xs lg:text-base lg:p-8 text-primary-foreground dark:text-primary dark:from-foreground/20 dark:to-foreground/10 font-bold bg-gradient-to-tr from-foreground/90 to-foreground/80 h-[150px] lg:h-[250px] rounded-xl flex items-end justify-end">
      {children}
    </div>
  );
};
