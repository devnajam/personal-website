import Image from "next/image";

interface ProfileAvatarProps {
  image: string;
  name: string;
  bio: string;
}

export const ProfileAvatar = (props: ProfileAvatarProps) => {
  return (
    <div className="flex flex-col lg:gap-4 gap-2">
      <div className="relative rounded-full lg:w-40 lg:h-40 w-28 h-28 border-4">
        <Image
          src={props.image}
          alt={props.name}
          fill
          className="rounded-full object-cover"
        />
      </div>
      <div>
        <h1 className="lg:text-2xl text-xl font-medium">{props.name}</h1>
        <p className="text-sm lg:text-base">{props.bio}</p>
      </div>
    </div>
  );
};
