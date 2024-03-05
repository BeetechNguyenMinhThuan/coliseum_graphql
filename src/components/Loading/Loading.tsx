import { useTranslation } from "react-i18next";

export function NovelLoading() {
  const { t } = useTranslation();

  return (
    <div className="my-3 flex gap-x-4">
      <div className=" left flex flex-col justify-between">
        <div className="icon-1 ">
          <p className="skeleton h-[60px] w-[60px]"></p>
        </div>
        <div className="icon-2">
          <p className="skeleton  h-[60px] w-[60px]"></p>
        </div>
        <div className="badges ">
          <p className="skeleton h-[60px] w-[60px]"></p>
        </div>
      </div>
      <div className="center flex flex-col gap-2">
        <div className="avatar">
          <p className="skeleton  h-[300px] w-[300px]"></p>
        </div>
        <div className="flex w-full gap-3">
          <div className="like ">
            <p className="skeleton h-[30px] w-[30px]"></p>
          </div>
          <div className="flex flex-col gap-1">
            <div className="bookmarks  ">
              <p className="skeleton h-[30px] w-[30px]"></p>
            </div>
            <div className="coment">
              <p className="skeleton h-[30px] w-[30px]"></p>
            </div>
          </div>
        </div>
      </div>
      <div className="right flex-1 flex flex-col gap-3">
        <div className="title flex h-[100px] w-full items-center justify-center ">
          <p className="skeleton h-[30px] w-[200px]"></p>
        </div>
        <div className="flex justify-between">
          <div className="author flex flex-1 justify-center">
            <p className="skeleton h-[20px] w-[150px]"></p>
          </div>
          <div className="created_at flex flex-1 justify-center">
            <p className="skeleton h-[20px] w-[150px]"></p>
          </div>
        </div>
        <div className="synopsis flex flex-col gap-3">
          <p className="skeleton h-[20px] w-full"></p>
          <p className="skeleton h-[20px] w-full"></p>
          <p className="skeleton h-[20px] w-full"></p>
          <p className="skeleton h-[20px] w-full"></p>
          <p className="skeleton h-[20px] w-full"></p>
          <p className="skeleton h-[20px] w-full"></p>
          <p className="skeleton h-[20px] w-full"></p>
          <p className="skeleton h-[20px] w-full"></p>
        </div>
      </div>
    </div>
  );
}
