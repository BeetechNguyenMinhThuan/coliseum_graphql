import {NavLink} from "react-router-dom";

export function SideBarMyPage() {
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
                        <ul className="leading-9">
                                                                                                                                
                            <NavLink to={"/edit-profile"}>ドーつ室芸設束ごイぐ</NavLink>
                            <NavLink to={"/edit-profile"}>ドーつ室芸設束ごイぐ</NavLink>
                            <NavLink to={"/edit-profile"}>ドーつ室芸設束ごイぐ</NavLink>
                            <NavLink to={"/edit-profile"}>ドーつ室芸設束ごイぐ</NavLink>
                        </ul>
                    </div>
                </li>
                <li className='border-2 p-5 text-center'>
                    <div className="text-center border-b-2 border-black">
                        要チ玲尽
                    </div>
                    <div className="w-full border-b-2 py-3 border-black">
                        <p className="border-2 rounded-lg border-black">
                            要チ玲尽む起
                        </p>
                    </div>
                    <div className="w-full border-b-2 py-3 border-black">
                        要チ玲尽む起
                    </div>
                    <ul className="w-full">
                        <li className="py-3 border-b-2 border-dashed">享凡喬つ</li>
                        <li className="py-3 border-b-2 border-dashed">享凡喬つ</li>
                        <li className="py-3">享凡喬つ</li>
                    </ul>
                </li>
                <li className='border-2 p-5 text-center'>
                    <h3 className="font-bold text-xl border-b-2 text-center pb-3 border-dashed">
                        地ぽへ根性
                    </h3>
                    <div className="border-b-2 border-dashed py-3">
                        <div className="flex justify-center gap-7">
                            <p className="mb-2">2023-11-30</p>
                            <p className="border-2 pl-2 pr-2">最ム選歳ーだ</p>
                        </div>
                        <NavLink className="text-left" to='/sidebar'>平申ゅゆ給論互更テルフ</NavLink>
                    </div>
                    <div className="pt-3">
                        <div className="flex justify-center gap-7">
                            <p className="mb-2">2023-11-30</p>
                            <p className="border-2 pl-2 pr-2">最ム選歳ーだ</p>
                        </div>
                        <NavLink className="text-left" to='/sidebar'>平申ゅゆ給論互更テルフ</NavLink>
                    </div>
                </li>
                <li className='border-2 p-5 text-center'>
                    <h3 className='font-bold text-2xl border-b-2 text-center pb-3'>議会</h3>
                    <div className="border-b-2 border-dashed py-3">
                        <NavLink className="text-left" to='/sidebar'>平申ゅゆ給論互更テルフ</NavLink>
                    </div>
                    <div className="pt-3">
                        <NavLink className="text-left" to='/sidebar'>平申ゅゆ給論互更テルフ</NavLink>
                    </div>
                </li>
                <li className='border-2 p-5 text-center'>
                    <h3 className='font-bold text-2xl border-b-2 text-center pb-3'>議会</h3>
                    <div className="border-b-2 border-dashed py-3">
                        <NavLink className="text-left" to='/sidebar'>平申ゅゆ給論互更テルフ</NavLink>
                    </div>
                    <div className="pt-3">
                        <NavLink className="text-left" to='/sidebar'>平申ゅゆ給論互更テルフ</NavLink>
                    </div>
                </li>
                {/* logout */}
                <li className='border-2 p-5 text-center'>
                    <NavLink to='/sidebar' className="font-bold">Logout</NavLink>
                </li>
                {/* leave group */}
                <li className='border-2 p-5 text-center'>
                    <NavLink to='/sidebar' className="font-bold">Leave group</NavLink>
                </li>
                <li className='border-2 p-5 text-center'>
                    <ul>
                        <li className="border-2 p-4 mb-2">平申</li>
                        <li className="border-2 p-4 mb-2">平申</li>
                        <li className="border-2 p-4">平申</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

