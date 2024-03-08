import { GET_NOVEL_UPDATE_OR_CREATED } from "@/graphql-client/novel/queries";
import { useQuery } from "@apollo/client";
import { NovelList } from ".";

export function NovelUpdatedNew() {
  const { loading, data, error, refetch } = useQuery(
    GET_NOVEL_UPDATE_OR_CREATED,
    {
      variables: { type: 2 },
    },
  );
  if (loading) return <div>Loading...</div>;
 
  // if (error) return <div>Error occurred: {error.message}</div>;

  return (
    <div>
      {data?.novels && <NovelList novels={data.novels} refetch={refetch} />}
    </div>
  );
}
