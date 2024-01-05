import {useState} from 'react';

export function RankingTab({tabs}) {
    const [activeTab, setActiveTab] = useState(tabs[0]);
    return (
        <div>
            <ul className='flex justify-between mb-2'>
                {
                    tabs.map(tab => (
                        <li className={`border-2 px-7 cursor-pointer hover:bg-gray-200 ${activeTab === tab ? 'bg-gray-200' : ''}`}
                            onClick={() => setActiveTab(tab)}>
                            <span>{tab}</span>
                        </li>
                    ))
                }

            </ul>
        </div>
    );
};

