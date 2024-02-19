import { useTranslation } from "react-i18next";
import { SideBarColiseum } from "components/SideBar/SideBarColiseum.tsx";
import { Advertisement } from "components/Advertisement";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";
import "./comment.scss";
export function Comment() {
  const { t } = useTranslation();

  const arrAds = [
    "s-l1200.webp",
    "coke-print-ad.jpg",
    "7_Up_-_You_like_it,_it_likes_you,_1948.jpg",
  ];

  const [show, setShow] = useState(true);
  const [activeBook, setActiveBook] = useState();

  const bookList = [
    {
      id: 1,
      name: "Tác phẩm 1",
      created_at: "20-12-2023",
    },
    {
      id: 2,
      name: "Tác phẩm 2",
      created_at: "20-12-2023",
    },
    {
      id: 3,
      name: "Tác phẩm 3",
      created_at: "20-12-2023",
    },
  ];

  const contens = [
    {
      book_id: 1,
      content: "Đây là content 1",
    },
    {
      book_id: 2,
      content: "Đây là content 2",
    },
    {
      book_id: 3,
      content: "Đây là content 3",
    },
  ];

  const [content, setContent] = useState();

  const hideInfo = () => {
    setShow(false);
  };

  const setshowInfo = () => {
    setShow(true);
  };

  const handleInfo = (id) => {
    setActiveBook(id);
    const selectedContent = contens.find((content) => content.book_id === id);
    hideInfo();
    if (selectedContent) {
      setContent(selectedContent.content);
    }
  };
  return (
    <>
      <SideBarColiseum />
      <div className="content flex-1">
        <div className="border-black-500 min-h-[188px] border-2 border-l-0 border-solid p-4 ">
          <div className="my-5 ">
            <div className="flex">
              <img
                className="h-[200px] w-[170px] border-2 object-cover "
                src="https://i0.wp.com/hocjavascript.net/wp-content/uploads/2020/11/The-hien-thi-hinh-anh-img-trong-HTML.png?resize=750%2C458&ssl=1"
                alt=""
              />
              <div className="w-full ps-4 ">
                <span className="block border-b-2 py-3 text-2xl font-bold  ">
                  透ロ校数ナ舎会シ打ち。
                </span>
                {bookList.map((book, index) => (
                  <div
                    key={index}
                    className="mb-3 cursor-pointer border-2 border-black px-3"
                    onClick={() => handleInfo(book.id)}
                    style={
                      book.id === activeBook
                        ? { backgroundColor: "rgb(243 241 241)" }
                        : {}
                    }
                  >
                    <div className="my-3 flex items-center">
                      <span className="mr-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-black font-bold">
                        {index + 1}
                      </span>
                      <span className="text-xl font-bold">{book.name}</span>
                    </div>
                    <div className="created_at text-right">
                      {book.created_at}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <CSSTransition
            in={show}
            timeout={150}
            classNames="info"
            onExited={setshowInfo}
          >
            {/* <div className="px-8 py-4 leading-8">
              <div className="px-8 py-4 leading-8">
                透ロ校数ナ舎会シ打彼優フヌヒ調26空製ケフエヨ毎逆由クじ語14拒ノカニ生人むびこ北読列トろけち。
                透ロ校数ナ舎会シ打彼優フヌヒ調26空製ケフエヨ毎逆由クじ語14拒ノカニ生人むびこ北読列トろけち。
                <br />
                透ロ校数ナ舎会シ打彼優フヌヒ調26空製ケフエヨ毎逆由クじ語14拒ノカニ生人むびこ北読列トろけち。
                透ロ校数ナ舎会シ打彼優フヌヒ調26空製ケフエヨ毎逆由クじ語14拒ノカニ生人むびこ北読列トろけち。
                <br />
                透ロ校数ナ舎会シ打彼優フヌヒ調26空製ケフエヨ毎逆由クじ語14拒ノカニ生人むびこ北読列トろけち。
                透ロ校数ナ舎会シ打彼優フヌヒ調26空製ケフエヨ毎逆由クじ語14拒ノカニ生人むびこ北読列トろけち。
                透ロ校数ナ舎会シ打彼優フヌヒ調26空製ケフエヨ毎逆由クじ語14拒ノカニ生人むびこ北読列トろけち。
                <br />
                透ロ校数ナ舎会シ打彼優フヌヒ調26空製ケフエヨ毎逆由クじ語14拒ノカニ生人むびこ北読列トろけち。
                <br />
                透ロ校数ナ舎会シ打彼優フヌヒ調26空製ケフエヨ毎逆由クじ語14拒ノカニ生人むびこ北読列トろけち。
                透ロ校数ナ舎会シ打彼優フヌヒ調26空製ケフエヨ毎逆由クじ語14拒ノカニ生人むびこ北読列トろけち。
                透ロ校数ナ舎会シ打彼優フヌヒ調26空製ケフエヨ毎逆由クじ語14拒ノカニ生人むびこ北読列トろけち。
                <br />
                透ロ校数ナ舎会シ打彼優フヌヒ調26空製ケフエヨ毎逆由クじ語14拒ノカニ生人むびこ北読列トろけち。
                <br />
                透ロ校数ナ舎会シ打彼優フヌヒ調26空製ケフエヨ毎逆由クじ語14拒ノカニ生人むびこ北読列トろけち。
                透ロ校数ナ舎会シ打彼優フヌヒ調26空製ケフエヨ毎逆由クじ語14拒ノカニ生人むびこ北読列トろけち。
                <br />
                透ロ校数ナ舎会シ打彼優フヌヒ調26空製ケフエヨ毎逆由クじ語14拒ノカニ生人むびこ北読列トろけち。
                透ロ校数ナ舎会シ打彼優フヌヒ調26空製ケフエヨ毎逆由クじ語14拒ノカニ生人むびこ北読列トろけち。
                <br />
                透ロ校数ナ舎会シ打彼優フヌヒ調26空製ケフエヨ毎逆由クじ語14拒ノカニ生人むびこ北読列トろけち。
                透ロ校数ナ舎会シ打彼優フヌヒ調26空製ケフエヨ毎逆由クじ語14拒ノカニ生人むびこ北読列トろけち。
                透ロ校数ナ舎会シ打彼優フヌヒ調26空製ケフエヨ毎逆由クじ語14拒ノカニ生人むびこ北読列トろけち。
                透ロ校数ナ舎会シ打彼優フヌヒ調26空製ケフエヨ毎逆由クじ語14拒ノカニ生人むびこ北読列トろけち。
                透ロ校数ナ舎会シ打彼優フヌヒ調26空製ケフエヨ毎逆由クじ語14拒ノカニ生人むびこ北読列トろけち。
              </div>
              <div className="px-8 py-4 leading-8">
                <h3 className="mt-5 border-b-2 border-black py-2 text-2xl font-bold ">
                  びこ北読列トろ
                </h3>
                <span className="block border-b-2 border-dashed border-black pb-6">
                  X(Twitter) ID: @MacDucDuy
                </span>
                <p>
                  <br />
                  透ロ校数ナ舎会シ打彼優フヌヒ調26空製ケフエヨ毎逆由クじ語14拒ノカニ生人むびこ北読列トろけち。
                  透ロ校数ナ舎会シ打彼優フヌヒ調26空製ケフエヨ毎逆由クじ語14拒ノカニ生人むびこ北読列トろけち。
                  透ロ校数ナ舎会シ打彼優フヌヒ調26空製ケフエヨ毎逆由クじ語14拒ノカニ生人むびこ北読列トろけち。
                  透ロ校数ナ舎会シ打彼優フヌヒ調26空製ケフエヨ毎逆由クじ語14拒ノカニ生人むびこ北読列トろけち。
                </p>
                <span className="my-4 block text-xl font-bold">透ロ校</span>
                <div className="leading-10">
                  透ロ校数ナ舎会シ打彼優フヌヒ調 / &n トろけち。
                  <br />
                  透ロ校数ナ舎会シ打彼優フヌヒ調 / トろけち。
                  <br />
                  透ロ校数ナ舎会シ打彼優フヌヒ調 /トろけち。
                  <br />
                  透ロ校数ナ舎会シ打彼優フヌヒ調 / トろけち。
                  <br />
                  透ロ校数ナ舎会シ打彼優フヌヒ調 /トろけち。
                  <br />
                  透ロ校数ナ舎会シ打彼優フヌヒ調 / トろけち。
                  <br />
                </div>
              </div>
            </div> */}
            <div>{content}</div>
          </CSSTransition>
        </div>
        <Advertisement>{arrAds}</Advertisement>
      </div>
    </>
  );
}
