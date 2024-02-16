export function NovelStatus({novelItem}) {
    if (novelItem.ranking) {
        return (
            <div className='border-2 p-1 h-fit text-center'>
                {novelItem.ranking}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"/>
                </svg>

            </div>
        );
    }
    return (
        <div className='border-2 p-1 h-fit'>
            {novelItem.status}
        </div>
    );
};

