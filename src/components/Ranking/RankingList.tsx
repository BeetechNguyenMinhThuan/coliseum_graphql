import { NovelList } from "@/components/novel";

export function RankingList({ novels, refetch }) {
  return (
    <div>
      <NovelList novels={novels} refetch={refetch} />
    </div>
  );
}
