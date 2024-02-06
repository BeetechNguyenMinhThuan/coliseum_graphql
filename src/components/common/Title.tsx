import { twMerge } from "tailwind-merge";

interface TitleProps {
  title: string;
  className?: string;
}

export function Title({ title, className = "" }: TitleProps) {
  return (
    <div
      className={twMerge(
        "border-b-2 p-3 text-center text-3xl font-bold",
        className,
      )}
    >
      <div>{title}</div>
    </div>
  );
}
