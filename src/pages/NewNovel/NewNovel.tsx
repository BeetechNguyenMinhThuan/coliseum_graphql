import { Advertisement } from "components/Advertisement";
import { NovelList, NovelNewContainer } from "components/Novel";
import { RankingContainer } from "components/Ranking";
import { SidebarHome } from "components/SideBar/SideBarHome";

export default function NewNovel() {
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
            created_at: '2023.11.30',
            status: 'たっ',

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
            created_at: '2023.11.26',
            status: 'たっ'


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
            created_at: '2023.11.26',
            status: 'たっ'


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
            created_at: '2023.11.26',
            status: 'たっ'


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
            created_at: '2023.11.26',
            status: 'たっ',


        }
    ]
    const arrAds = [
        's-l1200.webp',
        'coke-print-ad.jpg',
        '7_Up_-_You_like_it,_it_likes_you,_1948.jpg',
    ]
  return (
    <>
    <SidebarHome />
    <div className="content flex-1">
        {/* Novel List  */}
        <NovelNewContainer novels={novels} />
            {/* list novel update */}
            <div className="mt-3 border-2 border-black-500 border-solid min-h-[188px] p-2">
                <h1 className="text-center text-3xl pl-4 pr-4 pb-4">路張享凡喬つ</h1>
                <NovelList novels={novels} />
            </div>
        <Advertisement>{arrAds}</Advertisement>
        {/* list novel ranking */}
        <RankingContainer/>
    </div>
</>
  )
}
