import {NovelList} from "./NovelList.tsx";

export function NovelNewContainer({novels}) {
    return (
        <div className='mt-10 border-2 p-2'>
            <h2 className='font-bold text-2xl text-center pb-2'>新しく出版された小説</h2>
            <NovelList novels={novels}/>
        </div>
    );
};

