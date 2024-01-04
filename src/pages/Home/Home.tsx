import {useTranslation} from "react-i18next";
import {useQuery} from "@apollo/client";
import {GET_BOOKS} from "graphql-client/book/queries.ts";
import { Banner } from "components/Banner/Banner";
import { Search } from "components/Search/Search";

const Home = () => {
    const {t} = useTranslation();

    // const {loading, data} = useQuery(
    //     GET_BOOKS,
    // );
    // if (!data || !data.books) {
    //     return 'Not found data';
    // }
    return (
        <>
         <div className="content">
            {/* Bungo Coliseum tournament  */}
            <div className="border-2 border-black-500 border-solid min-h-[188px]">
                <div className="text-3xl text-center">
                    球ムヘマタ碁投ヘツ座性スイオ千夜チ港需チ緒動
                </div>
                <div className="py-5 px-2 sm:ml-[10px] md:ml-[30px]">
                    <p>
                        定倫テチヤ権占じぴ選株れねド疑後各す
                        <br />
                        よトぎ必身べさゆむ害受フラヤヌ書彼づぴか円破進るわび竹略キノモ居大でぶ答刊じぽよれ表美包孤湖すまゃよ
                        <br />
                        透ロ校数ナ舎会シ打彼優フヌヒ調26空製ケフエヨ毎逆由クじ語14拒ノカニ生人むびこ北読列トろけち。
                        <br />
                        握ふトり出時ごラじ入68情ユ勝古げ海成ぞ近討イリえま波見ねはせ止賞ヤウ根1井供り央編アハユマ請家96石アヨソ象樹めぎーリ。
                    </p>
                </div>
            </div>
            <Search />
         </div>
        </>
    );
};
export default Home;
