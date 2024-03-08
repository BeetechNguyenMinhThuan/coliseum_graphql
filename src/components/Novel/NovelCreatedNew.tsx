import { GET_NOVEL_UPDATE_OR_CREATED } from "@/graphql-client/novel/queries";
import { useQuery } from "@apollo/client";
import { NovelList } from ".";

export function NovelCreatedNew() {
  const { loading, data, error, refetch } = useQuery(
    GET_NOVEL_UPDATE_OR_CREATED,
    {
      variables: { type: 1 },
    },
  );

  return (
    <div>
      <NovelList refetch={refetch} novels={data?.novels} />
    </div>
  );
}
