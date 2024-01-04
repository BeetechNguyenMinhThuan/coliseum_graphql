import React from 'react';
import Novel from "./Novel.tsx";

const NovelList = ({novels}) => {
    return (
        <div>
            <h2 className='font-bold text-2xl text-center pb-2'>新しく出版された小説</h2>
            {
                novels.map((novel) => (
                    <Novel novel={novel}/>
                ))
            }
        </div>
    );
};

export default NovelList;