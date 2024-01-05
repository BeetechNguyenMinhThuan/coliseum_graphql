import {NovelStatus} from "./NovelStatus.tsx";

export function Novel({novel}) {
    return (
        <div className='novel-item border-t-2 border-gray-300 py-3'>
            <div className="novel-item-top">
                <div className="flex gap-x-4">
                    <div className="novel-left flex gap-x-3">
                        <NovelStatus novelItem={novel}></NovelStatus>
                        <div className="novel-image-wrap flex flex-col">
                            <div className="novel-image w-[150px] h-[170px]">
                                <img className='w-full h-full bg-cover object-cover object-center'
                                     src={novel.image} alt=""/>
                            </div>
                            <div className="flex gap-x-6 justify-end">
                                <div className="vote">
                                    <input type="checkbox"/>
                                    <span className='pl-1'>{novel.dislike}</span>
                                </div>
                                <div className="vote">
                                    <input type="checkbox"/>
                                    <span className='pl-1'>{novel.like}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="novel-right flex-1">
                        <div className="flex justify-between border-b-2 border-dashed border-gray-300">
                            <div>
                                <h3 className='font-bold text-2xl'>{novel.title}</h3>
                                <span>{novel.author}</span>
                            </div>
                            <div>
                                <button className='text-right w-full'>ウエトマエ</button>
                                <p>ウエトマエ {novel.created_at}</p>
                            </div>
                        </div>
                        <p className='font-xl text-justify'>
                            {novel.description}
                        </p>
                    </div>
                </div>
            </div>
            <div className="novel-item-bottom border-t-2 border-dashed">
                <ul className='flex flex-wrap items-center gap-x-4 pt-2'>
                    <li className='border-2 p-1'>
                        <span>#XXXXXXX</span>
                    </li>
                    <li className='border-2 p-1'>
                        <span>#XXXXXXX</span>
                    </li>
                    <li className='border-2 p-1'>
                        <span>#XXXXXXX</span>
                    </li>
                    <li className='border-2 p-1'>
                        <span>#XXXXXXX</span>
                    </li>
                    <li className='border-2 p-1'>
                        <span>#XXXXXXX</span>
                    </li>
                    <li className='border-2 p-1'>
                        <span>#XXXXXXX</span>
                    </li>
                    <li className='border-2 p-1'>
                        <span>#XXXXXXX</span>
                    </li>
                    <li className='border-2 p-1'>
                        <span>#XXXXXXX</span>
                    </li>
                </ul>
            </div>
            <div className="novel-item-bottom"></div>
        </div>
    );
};

