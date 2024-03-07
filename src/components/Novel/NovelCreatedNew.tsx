import { GET_NOVEL_UPDATE_OR_CREATED } from "@/graphql-client/novel/queries";
import { useQuery } from "@apollo/client";
import { NovelList } from ".";

export function NovelCreatedNew() {
  const { loading, data, error } = useQuery(GET_NOVEL_UPDATE_OR_CREATED, {
    variables: { type: 1 },
  });
  console.log(data?.novels);
  
  return (
    <div>
      <NovelList novels={data?.novels} />
    </div>
  );
}