import Image from "next/image";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { cn } from "@/lib/utils";

interface ProfileAvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  image: string;
  name: string;
  bio: string;
}

export const ProfileAvatar = (props: ProfileAvatarProps) => {
  return (
    <div className={cn("flex flex-col lg:gap-4 gap-2", props.className)}>
      <div className="relative rounded-full lg:w-40 lg:h-40 w-28 h-28 border-4">
        <Image
          src={props.image}
          alt={props.name}
          fill
          className="rounded-full object-cover"
        />
      </div>
      <div>
        <h1 className="lg:text-2xl text-xl font-medium flex items-center gap-2">
          {props.name}
          <MdOutlineVerifiedUser size={20} className="text-primary" />
        </h1>
        <p className="text-sm lg:text-base max-w-[300px] lg:max-w-full">
          {props.bio}
        </p>
      </div>
    </div>
  );
};
