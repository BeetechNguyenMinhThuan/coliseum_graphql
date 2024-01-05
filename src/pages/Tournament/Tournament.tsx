import {useTranslation} from "react-i18next";
import {SideBarColiseum} from "components/SideBar/SideBarColiseum.tsx";
import {NavLink} from "react-router-dom";
import {SideBarTournament} from "../../components/SideBar/SideBarTournament.tsx";

export function Tournament() {
    const {t} = useTranslation();


    return (
        <>
            <SideBarTournament/>
            <div className="content flex-1">
                <div className="border-2 border-black-500 border-solid min-h-[188px] p-2">
                    <div className="text-3xl text-center">
                        球ムヘマタ碁投ヘツ座性スイオ千夜チ港需チ緒動
                    </div>
                    <div className="py-5 px-2 sm:ml-[10px] md:ml-[30px] border-b-2">
                        <p>
                            定倫テチヤ権占じぴ選株れねド疑後各す
                            <br/>
                            よトぎ必身べさゆむ害受フラヤヌ書彼づぴか円破進るわび竹略キノモ居大でぶ答刊じぽよれ表美包孤湖すまゃよ
                            <br/>
                            透ロ校数ナ舎会シ打彼優フヌヒ調26空製ケフエヨ毎逆由クじ語14拒ノカニ生人むびこ北読列トろけち。
                            <br/>
                            握ふトり出時ごラじ入68情ユ勝古げ海成ぞ近討イリえま波見ねはせ止賞ヤウ根1井供り央編アハユマ請家96石アヨソ象樹めぎーリ。
                        </p>
                    </div>
                    <div className="py-3">よトぎ必身べさゆむ害受フラヤヌ書彼づぴか円破進るわび竹略キノモ居大でぶ答刊じぽよれ表美包孤湖すまゃよ
                        透ロ校数ナ舎会シ打彼優フヌヒ調26空製ケフエヨ毎逆由クじ語14拒ノカニ生人むびこ北読列トろけち。
                        握ふトり出時ごラじ入68情ユ勝古げ海成ぞ近討イリえま波見ねはせ止賞ヤウ根1井供り央編アハユマ請家96石アヨソ象樹めぎーリ。
                        よトぎ必身べさゆむ害受フラヤヌ書彼づぴか円破進るわび竹略キノモ居大でぶ答刊じぽよれ表美包孤湖すまゃよ
                        透ロ校数ナ舎会シ打彼優フヌヒ調26空製ケフエヨ毎逆由クじ語14拒ノカニ生人むびこ北読列トろけち。
                        握ふトり出時ごラじ入68情ユ勝古げ海成ぞ近討イリえま波見ねはせ止賞ヤウ根1井供り央編アハユマ請家96石アヨソ象樹めぎーリ。成ぞ近討イリえま波見ねはせ止賞ヤウ根1井供り央編アハユマ請家96石アヨソ象樹めぎーリ。
                    </div>
                    <div className="">
                        <ul className='flex items-center justify-between'>
                            <li className='border-2 px-4'>
                                <NavLink to='redireact'>身べさゆむさゆむ</NavLink>
                            </li>
                            <li className='border-2 px-4'>
                                <NavLink to='redireact'>身べさゆむさゆむ</NavLink>
                            </li>
                            <li className='border-2 px-4'>
                                <NavLink to='redireact'>身べさゆむさゆむ</NavLink>
                            </li>
                            <li className='border-2 px-4'>
                                <NavLink to='redireact'>身べさゆむさゆむ</NavLink>
                            </li>
                            <li className='border-2 px-4'>
                                <NavLink to='redireact'>身べさゆむさゆむ</NavLink>
                            </li>
                            <li className='border-2 px-4'>
                                <NavLink to='redireact'>身べさゆむさゆむ</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="text-center py-5 border-2 mt-5 px-5 ">
                        <h3 className='font-bold text-3xl mb-10 border-b-2 pb-3'>1番ホール</h3>
                        <div className="round">
                            <h4 className='font-bold text-3xl'>ゃよ 透ロ校数ナ舎会シ打</h4>
                            <h4 className='font-bold text-3xl my-10'>VS</h4>
                            <h4 className='font-bold text-3xl'>止賞ヤウ根1井供り央</h4>
                        </div>
                    </div>
                    <div className="text-center py-5 border-2 mt-5 px-5 ">
                        <h3 className='font-bold text-3xl mb-10 border-b-2 pb-3'>2番ホール</h3>
                        <div className="round">
                            <h4 className='font-bold text-3xl'>わび竹略キノモ居大でぶ答刊じぽよ</h4>
                            <h4 className='font-bold text-3xl my-10'>VS</h4>
                            <h4 className='font-bold text-3xl'>討イリえま波</h4>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
};
