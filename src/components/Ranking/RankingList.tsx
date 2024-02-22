import { NovelList } from "@/components/novel";

export function RankingList({ novels }) {
  return (
    <div>
      <NovelList novels={novels} />
    </div>
  );
}
