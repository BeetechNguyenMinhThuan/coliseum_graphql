import { useTranslation } from "react-i18next";
import { SideBarTournament } from "../../components/SideBar/SideBarTournament.tsx";
import Hero from "@/components/common/Hero.tsx";
import "./index.scss";
export function TournamentBoard() {
  const { t } = useTranslation();
  const arrAds = [
    "s-l1200.webp",
    "coke-print-ad.jpg",
    "7_Up_-_You_like_it,_it_likes_you,_1948.jpg",
  ];

  return (
    <>
      <Hero>
        <img src="/public/assets/logoColiseum.png" alt="" />
        <div className="px-8">
          <h1 className="title mb-6 text-center text-3xl font-extrabold">
            作家の遊び場
          </h1>
          <p className="mb-4 font-medium">
            誰もが自分の作品でトーナメントで優勝し、偉大な作家になることを目指します
            彼らは武器として書き、トーナメントで試合に勝つことでチャンピオンシップを目指しました。
            デュエル（2024 年春頃にリリース予定の機能）とランキングの向
            アプリケーションサイト。
          </p>
          <p className="font-medium">
            作者が楽しめる」をコンセプトに、作品のクオリティと期待感だけを武器に作品を審査する。
            読者に「この 2
            つの作品のうちどちらが好きですか?」を選択させることで価格を設定します。
            ' 私たちはまだいるのに
            私たちは方法を見つけましたが、評価対象となった作品に焦点を当てないフォーマットを探していました。
            最高の評価。
          </p>
        </div>
      </Hero>
      <div className="container mx-auto mt-16 bg-white p-8">
        <div className="flex gap-x-3">
          <SideBarTournament />
          <div className="content ">
            <div className="flex flex-1">
              <div className="tourament-tab flex gap-1"></div>
              <div className="tourament-tab flex gap-1"></div>
              <div className="tourament-tab flex gap-1"></div>
              <div className="tourament-tab flex gap-1"></div>
            </div>
            <div className=" mt-10 flex flex-col ">
              <div className="match flex mb-8">
                <div className="match-name flex w-[46px] items-center justify-center rounded-l-[26px] bg-black">
                  <span className="text-white">Trận 1</span>
                </div>
                <div className="match-item">
                  <div className="match-player relative flex items-center">
                    <div className="name-player h-[62px] w-[390px] border-2  p-4">
                      <span>123</span>
                    </div>
                    <div className="line relative h-[1px] w-[50px] bg-black"></div>
                  </div>
                  <div className="match-player relative flex items-center">
                    <div className="name-player h-[62px] w-[390px] border-2 border-t-0  p-4">
                      <span>456</span>
                    </div>
                    <div className="line relative h-[1px] w-[50px] bg-black"></div>
                  </div>
                </div>
                <div className=" winner-match relative flex items-center">
                  <div className="line relative h-[1px] w-[50px] bg-black"></div>
                  <div className="name-player h-[62px] w-[390px] border-2  p-4 rounded-l-[10px]">
                    <span>456</span>
                  </div>
                </div>
              </div>

              <div className="match flex mb-8">
                <div className="match-name flex w-[46px] items-center justify-center rounded-l-[26px] bg-black">
                  <span className="text-white">Trận 2</span>
                </div>
                <div className="match-item">
                  <div className="match-player relative flex items-center">
                    <div className="name-player h-[62px] w-[390px] border-2  p-4">
                      <span>123</span>
                    </div>
                    <div className="line relative h-[1px] w-[50px] bg-black"></div>
                  </div>
                  <div className="match-player relative flex items-center">
                    <div className="name-player h-[62px] w-[390px] border-2 border-t-0  p-4">
                      <span>456</span>
                    </div>
                    <div className="line relative h-[1px] w-[50px] bg-black"></div>
                  </div>
                </div>
                <div className=" winner-match relative flex items-center">
                  <div className="line relative h-[1px] w-[50px] bg-black"></div>
                  <div className="name-player h-[62px] w-[390px] border-2  p-4 rounded-l-[10px]">
                    <span>456</span>
                  </div>
                </div>
              </div>

              <div className="match flex mb-8">
                <div className="match-name flex w-[46px] items-center justify-center rounded-l-[26px] bg-black">
                  <span className="text-white">Trận 3</span>
                </div>
                <div className="match-item">
                  <div className="match-player relative flex items-center">
                    <div className="name-player h-[62px] w-[390px] border-2  p-4">
                      <span>123</span>
                    </div>
                    <div className="line relative h-[1px] w-[50px] bg-black"></div>
                  </div>
                  <div className="match-player relative flex items-center">
                    <div className="name-player h-[62px] w-[390px] border-2 border-t-0  p-4">
                      <span>456</span>
                    </div>
                    <div className="line relative h-[1px] w-[50px] bg-black"></div>
                  </div>
                </div>
                <div className=" winner-match relative flex items-center">
                  <div className="line relative h-[1px] w-[50px] bg-black"></div>
                  <div className="name-player h-[62px] w-[390px] border-2  p-4 rounded-l-[10px]">
                    <span>456</span>
                  </div>
                </div>
              </div>

              <div className="match flex mb-8">
                <div className="match-name flex w-[46px] items-center justify-center rounded-l-[26px] bg-black">
                  <span className="text-white">Trận 4</span>
                </div>
                <div className="match-item">
                  <div className="match-player relative flex items-center">
                    <div className="name-player h-[62px] w-[390px] border-2  p-4">
                      <span>123</span>
                    </div>
                    <div className="line relative h-[1px] w-[50px] bg-black"></div>
                  </div>
                  <div className="match-player relative flex items-center">
                    <div className="name-player h-[62px] w-[390px] border-2 border-t-0  p-4">
                      <span>456</span>
                    </div>
                    <div className="line relative h-[1px] w-[50px] bg-black"></div>
                  </div>
                </div>
                <div className=" winner-match relative flex items-center">
                  <div className="line relative h-[1px] w-[50px] bg-black"></div>
                  <div className="name-player h-[62px] w-[390px] border-2  p-4 rounded-l-[10px]">
                    <span>456</span>
                  </div>
                </div>
              </div>

              <div className="match flex mb-8">
                <div className="match-name flex w-[46px] items-center justify-center rounded-l-[26px] bg-black">
                  <span className="text-white">Trận 5</span>
                </div>
                <div className="match-item">
                  <div className="match-player relative flex items-center">
                    <div className="name-player h-[62px] w-[390px] border-2  p-4">
                      <span>123</span>
                    </div>
                    <div className="line relative h-[1px] w-[50px] bg-black"></div>
                  </div>
                  <div className="match-player relative flex items-center">
                    <div className="name-player h-[62px] w-[390px] border-2 border-t-0  p-4">
                      <span>456</span>
                    </div>
                    <div className="line relative h-[1px] w-[50px] bg-black"></div>
                  </div>
                </div>
                <div className=" winner-match relative flex items-center">
                  <div className="line relative h-[1px] w-[50px] bg-black"></div>
                  <div className="name-player h-[62px] w-[390px] border-2  p-4 rounded-l-[10px]">
                    <span>456</span>
                  </div>
                </div>
              </div>

              <div className="match flex mb-8">
                <div className="match-name flex w-[46px] items-center justify-center rounded-l-[26px] bg-black">
                  <span className="text-white">Trận 6</span>
                </div>
                <div className="match-item">
                  <div className="match-player relative flex items-center">
                    <div className="name-player h-[62px] w-[390px] border-2  p-4">
                      <span>123</span>
                    </div>
                    <div className="line relative h-[1px] w-[50px] bg-black"></div>
                  </div>
                  <div className="match-player relative flex items-center">
                    <div className="name-player h-[62px] w-[390px] border-2 border-t-0  p-4">
                      <span>456</span>
                    </div>
                    <div className="line relative h-[1px] w-[50px] bg-black"></div>
                  </div>
                </div>
                <div className=" winner-match relative flex items-center">
                  <div className="line relative h-[1px] w-[50px] bg-black"></div>
                  <div className="name-player h-[62px] w-[390px] border-2  p-4 rounded-l-[10px]">
                    <span>456</span>
                  </div>
                </div>
              </div>

              <div className="match flex mb-8">
                <div className="match-name flex w-[46px] items-center justify-center rounded-l-[26px] bg-black">
                  <span className="text-white">Trận 7</span>
                </div>
                <div className="match-item">
                  <div className="match-player relative flex items-center">
                    <div className="name-player h-[62px] w-[390px] border-2  p-4">
                      <span>123</span>
                    </div>
                    <div className="line relative h-[1px] w-[50px] bg-black"></div>
                  </div>
                  <div className="match-player relative flex items-center">
                    <div className="name-player h-[62px] w-[390px] border-2 border-t-0  p-4">
                      <span>456</span>
                    </div>
                    <div className="line relative h-[1px] w-[50px] bg-black"></div>
                  </div>
                </div>
                <div className=" winner-match relative flex items-center">
                  <div className="line relative h-[1px] w-[50px] bg-black"></div>
                  <div className="name-player h-[62px] w-[390px] border-2  p-4 rounded-l-[10px]">
                    <span>456</span>
                  </div>
                </div>
              </div>

              <div className="match flex mb-8">
                <div className="match-name flex w-[46px] items-center justify-center rounded-l-[26px] bg-black">
                  <span className="text-white">Trận 8</span>
                </div>
                <div className="match-item">
                  <div className="match-player relative flex items-center">
                    <div className="name-player h-[62px] w-[390px] border-2  p-4">
                      <span>123</span>
                    </div>
                    <div className="line relative h-[1px] w-[50px] bg-black"></div>
                  </div>
                  <div className="match-player relative flex items-center">
                    <div className="name-player h-[62px] w-[390px] border-2 border-t-0  p-4">
                      <span>456</span>
                    </div>
                    <div className="line relative h-[1px] w-[50px] bg-black"></div>
                  </div>
                </div>
                <div className=" winner-match relative flex items-center">
                  <div className="line relative h-[1px] w-[50px] bg-black"></div>
                  <div className="name-player h-[62px] w-[390px] border-2  p-4 rounded-l-[10px]">
                    <span>456</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
