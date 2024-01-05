import { useLocation } from "react-router-dom";
import {NovelList} from "./NovelList.tsx";
import { Advertisement } from "components/Advertisement/Advertisement.tsx";

export function NovelNewContainer({novels}) {
    const location = useLocation();
    const isAtNewNovel = location.pathname === '/newnovel';
    return (
        <div className={`${isAtNewNovel ? '' : 'mt-10'} border-2 p-2`}>
            <h2 className='font-bold text-2xl text-center pb-2'>新しく出版された小説</h2>
            <NovelList novels={novels}/>
        </div>
    );
};

