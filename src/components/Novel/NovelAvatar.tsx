import classNames from "@/utils/classNames.ts";

interface NovelAvatarProps {
  image: string;
  className?: string;
}

function NovelAvatar(props: NovelAvatarProps) {
  const { image, className = "" } = props;
  return (
    <div className={classNames(`novel-image h-[300px] w-[300px] ${className}`)}>
      <img
        className="h-full w-full bg-cover object-cover object-center"
        src={image}
        alt=""
      />
    </div>
  );
}

export default NovelAvatar;
