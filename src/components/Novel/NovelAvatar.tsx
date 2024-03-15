import classNames from "@/utils/classNames.ts";

interface NovelAvatarProps {
  image: string;
  className?: string;
}

function NovelAvatar(props: NovelAvatarProps) {
  const { image} = props;
  return (
    
      <img
        className="h-full w-full bg-cover object-cover object-center bg-imm"
        src={image}
        alt=""
      />
  );
}

export default NovelAvatar;
