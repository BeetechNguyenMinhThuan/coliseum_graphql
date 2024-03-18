import { GET_NOVEL_UPDATE_OR_CREATED } from "@/graphql-client/novel/queries";
import { useQuery } from "@apollo/client";
import { NovelList } from "./NovelList";

export function NovelCreatedNew() {
  const { data } = useQuery(GET_NOVEL_UPDATE_OR_CREATED, {
    variables: { type: 1 },
  });

  return (
    <div className="mt-4 rounded-[20px] border-2 p-4">
    <div className="">
      <h2 className="title font-semibold text-2xl border-b-2 border-dashed border-b-[#ccc]">された作品</h2>
      <NovelList type="create" novels={data?.novels} />
    </div>
    </div>
  );
}
