import classNames from "@/utils/classNames.ts";

interface NovelAvatarProps {
  image: string;
  className?: string;
}

function NovelAvatar(props: NovelAvatarProps) {
  const { image, className = "" } = props;
  return (
    <div className={classNames(`novel-image h-[170px] w-[150px] ${className}`)}>
      <img
        className="h-full w-full bg-cover object-cover object-center"
        src={image}
        alt=""
      />
    </div>
  );
}

export default NovelAvatar;
