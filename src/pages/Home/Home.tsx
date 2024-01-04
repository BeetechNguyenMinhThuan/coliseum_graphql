import {useTranslation} from "react-i18next";
import {useQuery} from "@apollo/client";
import {GET_BOOKS} from "graphql-client/book/queries.ts";
import {Search} from "components/Search/Search";
import {Banner} from "components/Banner/Banner";
import Novel from "../../components/Novel/Novel.tsx";
import NovelList from "../../components/Novel/NovelList.tsx";
import { Advertisement } from "components/Advertisement/Advertisement.tsx";

const Home = () => {
    const {t} = useTranslation();

    // const {loading, data} = useQuery(
    //     GET_BOOKS,
    // );
    // if (!data || !data.books) {
    //     return 'Not found data';
    // }
    const novels = [
        {
            like: 6,
            dislike: 0,
            image: '/assets/Thumbnail-YouTube-la-gi-1-1-1-750x420.jpg',
            author: 'ウエトマエ',
            title: '運営会社 株式会社ウエトマエ',
            description: '日本は四季がはっきりしていて、それぞれの季節に美しい自然が楽しめます。春には桜の花が咲き、夏には緑が豊かになります。秋は紅葉が美しく、冬には雪景色が見られることもあります。日本の文化は古くからの伝統と現代の技術が融合していて、訪れる人々に深い印象を与えます。日本料理も世界中で人気があり、寿司や天ぷらなどは多くの人に愛されています。\n' +
                '                            日本は四季がはっきりしていて、それぞれの季節に美しい自然が楽しめます。春には桜の花が咲き、夏には緑が豊かになります。秋は紅葉が美しく、冬には雪景色\n' +
                '                            日本は四季がはっきりしていて、それぞれの季節に美しい自然が楽しめます。春には桜の花が咲き、夏には緑が豊かになります。秋は紅葉が美しく、冬には雪景色',
            created_at: '2023.11.30'

        },
        {
            like: 6,
            dislike: 0,
            image: '/assets/thumbnail-la-gi-1.jpg',
            author: 'ウエトマエ',
            title: '運営会社 株式会社ウエトマエ',
            description: '日本は四季がはっきりしていて、それぞれの季節に美しい自然が楽しめます。春には桜の花が咲き、夏には緑が豊かになります。秋は紅葉が美しく、冬には雪景色が見られることもあります。日本の文化は古くからの伝統と現代の技術が融合していて、訪れる人々に深い印象を与えます。日本料理も世界中で人気があり、寿司や天ぷらなどは多くの人に愛されています。\n' +
                '                            日本は四季がはっきりしていて、それぞれの季節に美しい自然が楽しめます。春には桜の花が咲き、夏には緑が豊かになります。秋は紅葉が美しく、冬には雪景色\n' +
                '                            日本は四季がはっきりしていて、それぞれの季節に美しい自然が楽しめます。春には桜の花が咲き、夏には緑が豊かになります。秋は紅葉が美しく、冬には雪景色',
            created_at: '2023.11.26'

        },
        {
            like: 6,
            dislike: 0,
            image: '/assets/thumbnail1.jpg',
            author: 'ウエトマエ',
            title: '運営会社 株式会社ウエトマエ',
            description: '日本は四季がはっきりしていて、それぞれの季節に美しい自然が楽しめます。春には桜の花が咲き、夏には緑が豊かになります。秋は紅葉が美しく、冬には雪景色が見られることもあります。日本の文化は古くからの伝統と現代の技術が融合していて、訪れる人々に深い印象を与えます。日本料理も世界中で人気があり、寿司や天ぷらなどは多くの人に愛されています。\n' +
                '                            日本は四季がはっきりしていて、それぞれの季節に美しい自然が楽しめます。春には桜の花が咲き、夏には緑が豊かになります。秋は紅葉が美しく、冬には雪景色\n' +
                '                            日本は四季がはっきりしていて、それぞれの季節に美しい自然が楽しめます。春には桜の花が咲き、夏には緑が豊かになります。秋は紅葉が美しく、冬には雪景色',
            created_at: '2023.11.26'

        },
        {
            like: 6,
            dislike: 0,
            image: '/assets/Thumbnail-YouTube-la-gi-1-1-1-750x420.jpg',
            author: 'ウエトマエ',
            title: '運営会社 株式会社ウエトマエ',
            description: '日本は四季がはっきりしていて、それぞれの季節に美しい自然が楽しめます。春には桜の花が咲き、夏には緑が豊かになります。秋は紅葉が美しく、冬には雪景色が見られることもあります。日本の文化は古くからの伝統と現代の技術が融合していて、訪れる人々に深い印象を与えます。日本料理も世界中で人気があり、寿司や天ぷらなどは多くの人に愛されています。\n' +
                '                            日本は四季がはっきりしていて、それぞれの季節に美しい自然が楽しめます。春には桜の花が咲き、夏には緑が豊かになります。秋は紅葉が美しく、冬には雪景色\n' +
                '                            日本は四季がはっきりしていて、それぞれの季節に美しい自然が楽しめます。春には桜の花が咲き、夏には緑が豊かになります。秋は紅葉が美しく、冬には雪景色',
            created_at: '2023.11.26'

        },
        {
            like: 6,
            dislike: 0,
            image: '/assets/Thumbnail-YouTube-la-gi-1-1-1-750x420.jpg',
            author: 'ウエトマエ',
            title: '運営会社 株式会社ウエトマエ',
            description: '日本は四季がはっきりしていて、それぞれの季節に美しい自然が楽しめます。春には桜の花が咲き、夏には緑が豊かになります。秋は紅葉が美しく、冬には雪景色が見られることもあります。日本の文化は古くからの伝統と現代の技術が融合していて、訪れる人々に深い印象を与えます。日本料理も世界中で人気があり、寿司や天ぷらなどは多くの人に愛されています。\n' +
                '                            日本は四季がはっきりしていて、それぞれの季節に美しい自然が楽しめます。春には桜の花が咲き、夏には緑が豊かになります。秋は紅葉が美しく、冬には雪景色\n' +
                '                            日本は四季がはっきりしていて、それぞれの季節に美しい自然が楽しめます。春には桜の花が咲き、夏には緑が豊かになります。秋は紅葉が美しく、冬には雪景色',
            created_at: '2023.11.26'

        }
    ]
    return (
        <>
            <div className="content flex-1">
                {/* Bungo Coliseum tournament  */}
                <div className="border-2 border-black-500 border-solid min-h-[188px] p-2">
                    <div className="text-3xl text-center">
                        球ムヘマタ碁投ヘツ座性スイオ千夜チ港需チ緒動
                    </div>
                    <div className="py-5 px-2 sm:ml-[10px] md:ml-[30px]">
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
                </div>
                <Search/>

                {/* Novel List  */}
                <NovelList novels={novels}/>
                <Advertisement />
            </div>
        </>
    );
};
export default Home;
