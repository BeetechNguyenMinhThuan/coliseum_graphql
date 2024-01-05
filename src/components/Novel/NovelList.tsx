import {Novel} from "./Novel.tsx";

export function NovelList({novels}) {
    return (
        <div>
            {
                novels.map((novel) => (
                    <Novel novel={novel}/>
                ))
            }
        </div>
    );
};

