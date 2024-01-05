import {NavLink} from "react-router-dom";

export function SideBarAuthor() {
    return (
        <div className='coli-sidebar flex-grow-0 basis-[270px]'>
            <ul className='flex flex-col'>
                <li className='border-2 p-5'>
                    <div className="border-2 w-40 h-40 mx-auto">
                        <span className='flex items-center justify-center h-full'>議会の規則</span>
                    </div>
                </li>
                <li className='border-2 p-5'>
                    <div className="border-2 px-5 py-2 mx-auto">
                        <h3 className='font-bold text-2xl border-b-2 text-center pb-3'>議会</h3>
                        <p className='border-b-2 border-dashed py-3'>モ居大でぶ答刊じぽよれ表美包孤湖すまゃよ
                            透ロ校数ナ舎会シ打彼優フヌヒ調26空製ケフエヨ毎逆由クじ語</p>
                        <p className='py-3'>モ居大でぶ答刊じぽよれ表美包孤湖すまゃよ 透ロ校数ナ舎会シ</p>
                    </div>
                </li>
                <li className='border-2 p-5 text-center'>
                    <NavLink to='/sidebar'>Author</NavLink>
                </li>
                <li className='border-2 p-5 text-center'>
                    <NavLink to='/sidebar'>議会の規則</NavLink>
                </li>
                <li className='border-2 p-5 text-center'>
                    <NavLink to='/sidebar'>参加者のリスト</NavLink>
                </li>
                <li className='border-2 p-5 text-center'>
                    <NavLink to='/sidebar'>トーナメント表</NavLink>
                </li>
                <li className='border-2 p-5 text-center'>
                    <NavLink to='/sidebar'>ユーザーマニュアル</NavLink>
                </li>
                <li className='border-2 p-5 text-center'>
                    <NavLink to='/sidebar'>カードが注目を集める</NavLink>
                </li>
                <li className='border-2 p-5 text-center'>
                    <NavLink to='/sidebar'>
                        <div className="">
                            <p>カードが注目を集める</p>
                            <span>VS</span>
                            <p>カードが注目を集める</p>
                        </div>
                    </NavLink>
                </li>
                <li className='border-2 p-5 text-center'>
                    <NavLink to='/sidebar'>
                        <div className="">
                            <p>カードが注目を集める</p>
                            <span>VS</span>
                            <p>カードが注目を集める</p>
                        </div>
                    </NavLink>
                </li>
                <li className='border-2 p-5 text-center'>
                    <NavLink to='/sidebar'>
                        <h3>バトルロイヤル機能</h3>
                        <span>2024 バトルロイヤル機能</span>
                    </NavLink>
                </li>
                <li className='border-2 p-5 text-center'>
                    <NavLink to='/sidebar'>
                        <h3>バトルロイヤル機能</h3>
                        <span>2024 バトルロイヤル機能</span>
                    </NavLink>
                </li>
                <li className='border-2 p-5 text-center'>
                    <NavLink to='/sidebar'>
                        <h3>バトルロイヤル機能</h3>
                        <span>2024 バトルロイヤル機能</span>
                    </NavLink>
                </li>
                <li className='border-2 p-5 text-center'>
                    <NavLink to='/sidebar'>広告</NavLink>
                </li>
                <li className='border-2 p-5 text-center'>
                    <NavLink to='/sidebar'>広告</NavLink>
                </li>
                <li className='border-2 p-5 text-center'>
                    <NavLink to='/sidebar'>広告</NavLink>
                </li>
                <li className='border-2 p-5 text-center'>
                    <NavLink to='/sidebar'>広告</NavLink>
                </li>
                <li className='border-2 p-5 text-center'>
                    <NavLink to='/sidebar'>広告</NavLink>
                </li>
                <li className='border-2 p-5 text-center'>
                    <NavLink to='/sidebar'>広告</NavLink>
                </li>
            </ul>
        </div>
    );
};

