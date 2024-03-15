import { GET_NOVEL_UPDATE_OR_CREATED } from "@/graphql-client/novel/queries";
import { useQuery } from "@apollo/client";
import { NovelList } from ".";

export function NovelUpdatedNew() {
  const { loading, data } = useQuery(GET_NOVEL_UPDATE_OR_CREATED, {
    variables: { type: 2 },
  });
  if (loading) return <div>Loading...</div>;

  return (
    <div className="">
      <h2 className="title text-2xl font-semibold border-b-2 border-dashed border-b-[#ccc]">された作品</h2>
      {data?.novels && <NovelList type="update" novels={data.novels} />}
    </div>
  );
}
