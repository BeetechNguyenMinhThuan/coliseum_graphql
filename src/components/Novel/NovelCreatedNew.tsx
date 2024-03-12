import { GET_NOVEL_UPDATE_OR_CREATED } from "@/graphql-client/novel/queries";
import { useQuery } from "@apollo/client";
import { NovelList } from "./NovelList";

export function NovelCreatedNew() {
  const { data} = useQuery(GET_NOVEL_UPDATE_OR_CREATED, {
    variables: { type: 1 },
  });

  return (
    <div>
      <NovelList novels={data?.novels} />
    </div>
  );
}
