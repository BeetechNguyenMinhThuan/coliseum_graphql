import {NovelList} from "components/Novel";

export function RankingList({novels}) {
    return (
        <div>
            <NovelList novels={novels}/>
        </div>
    );
};

