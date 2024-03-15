import useAuth from "@/hooks/useAuth";
import React, { Fragment } from "react";
import { Form, NavLink } from "react-router-dom";


function Hero({children}) {
  const user = useAuth();
  return (
    <div
    className={`z-50 relative bg-white`}
  >
   
    <div className="container mx-auto">
    <div
        className={` rounded-t-[40px] bg-white px-8 bg-opacity-20`}
      >
        <div className="header-top mb-4 flex h-[58px] justify-between">
          <div className="header-top-logo flex h-full w-[225px] items-end justify-start">
            <img
              className={`pr-4 ${location.pathname == "/" ? "hidden" : "block"}`}
              src="/public/assets/logoColiseum.png"
              alt=""
            />
          </div>
          <div className="header-top-center bg-color1 h-[48px] flex-1">
            <div className="flex h-full items-center justify-center gap-x-6 ">
              {user.isAuth ? (
                <>
                  <div className="flex items-center">
                    <div className="avatar mx-3 h-[30px] w-[30px] overflow-hidden rounded-full border-[1px] border-black">
                      <img
                        src="https://inkythuatso.com/uploads/thumbnails/800/2023/03/9-anh-dai-dien-trang-inkythuatso-03-15-27-03.jpg"
                        alt=""
                      />
                    </div>
                    <NavLink to="/test">{user?.user?.name}</NavLink>
                  </div>
                  <span>|</span>
                  <div>
                    <Form action="/logout" method="post">
                      <button type="submit">ログアウト</button>
                    </Form>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <NavLink to="/login">サインイン</NavLink>
                  </div>
                  <span>|</span>
                  <div>
                    <NavLink to="/register">新規ユーザー登録</NavLink>
                  </div>
                  <span>|</span>
                  <div>
                    <button className="rounded bg-white px-3">
                      <NavLink to="/user-manual">初心者向けガイ</NavLink>
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="header-top-right flex w-[225px] items-end justify-end">
            <button
              className="m-[10px] w-[100px] rounded border-[1px] border-black bg-white px-3"
            >
              TOP
              <div className="border-b-10 border-l-10 h-0 w-0 border-solid border-transparent border-b-black"></div>
            </button>
          </div>
        </div>
        <nav className="header-nav-wrap py-2">
          <div className="container">
            <ul className="flex flex-wrap justify-between gap-x-4">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-color2 rounded px-3 py-1"
                      : "hover:bg-color2 rounded px-3 py-1"
                  }
                >
                  Trang chủ
                </NavLink>
              </li>
              {/* <li>
            <NavLink to="/tournament">Tournament</NavLink>
          </li> */}
              {user.isAuth && (
                <Fragment>
                  <li>
                    <NavLink
                      to="/mypage"
                      className={({ isActive }) =>
                        isActive
                          ? "bg-color2 rounded px-3 py-1"
                          : "hover:bg-color2 rounded px-3 py-1"
                      }
                    >
                      MyPage
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/search-novel"
                      className={({ isActive }) =>
                        isActive
                          ? "bg-color2 rounded px-3 py-1"
                          : "hover:bg-color2 rounded px-3 py-1"
                      }
                    >
                      SearchNovel
                    </NavLink>
                  </li>
                </Fragment>
              )}
              <li>
                <NavLink
                  to="/coliseum"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-color2 rounded px-3 py-1"
                      : "hover:bg-color2 rounded px-3 py-1"
                  }
                >
                  Coliseum
                </NavLink>
              </li>
              <li>
                <a
                  className="hover:bg-color2 rounded px-3 py-1"
                  href="https://www.bungo-coliseum.jp/creation"
                  target="blank"
                >
                  創作論
                </a>
              </li>
              <li>
                <a
                  className="hover:bg-color2 rounded px-3 py-1"
                  href="https://www.bungo-coliseum.jp/recommend"
                  target="blank"
                >
                  推し事
                </a>
              </li>
              <li>
                <NavLink
                  to="/newnovel"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-color2 rounded px-3 py-1"
                      : "hover:bg-color2 rounded px-3 py-1"
                  }
                >
                  New Novel
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/use-regulations"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-color2 rounded px-3 py-1"
                      : "hover:bg-color2 rounded px-3 py-1"
                  }
                >
                  useRegulations
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/123"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-color2 rounded px-3 py-1"
                      : "hover:bg-color2 rounded px-3 py-1"
                  }
                >
                  Thông báo
                </NavLink>
              </li>
              {/* <li>
            <NavLink to="/tournament-board">Tournament Board</NavLink>
          </li>
          <li>
            <NavLink to="/author-join-tourament">AuthorJoinTourament</NavLink>
          </li>
          <li>
            <NavLink to="/result-tourament">ResultTourament</NavLink>
          </li>
          <li>
            <NavLink to="/hall-tourament">ResultTourament</NavLink>
          </li>
          <li>
            <NavLink to="/fan-page">FanPage</NavLink>
          </li>
          <li>
            <NavLink to="/user-manual">UserManual</NavLink>
          </li>
          <li>
            <NavLink to="/top-comment">TopComment</NavLink>
          </li>
          <li>
            <NavLink to="/comment">Comment</NavLink>
          </li>
          <li>
            <NavLink to="/recruitment">Recruitment</NavLink>
          </li>
          <li>
            <NavLink to="/top-tourament">TopTourament</NavLink>
          </li>
          <li>
            <NavLink to="/add-novel">Upload Novel</NavLink>
          </li>
          <li>
            <NavLink to="/add-chapter">Add Chapter</NavLink>
          </li>
          <li>
            <NavLink to="/reader-novel">ReaderNovel</NavLink>
          </li>
          <li>
            <Link
              to="coliseum_noti"
              spy={true}
              smooth={true}
              offset={-190}
              duration={500}
            >
              お知らせ
            </Link>
          </li>
          <li>
            <NavLink to="/test5">Tourament</NavLink>
          </li> */}

              {/* <li>
            <NavLink to="/protection-policy">ProtectionPolicy</NavLink>
          </li> */}
            </ul>
            {/* <Search/> */}
          </div>
        </nav>
      </div>

      <div className="children py-4">
        <div className="my-14 w-1/2">
        {children}
        </div>
      </div>
    </div>
  </div>
  );
}

export default Hero;
