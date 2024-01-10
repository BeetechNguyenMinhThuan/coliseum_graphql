import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  const [randomNumber, setRandomNumber] = useState(1);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Tùy chọn này tạo hiệu ứng cuộn mượt mà
    });
  };
  //   function getRandomNumber() {
  //     return Math.floor(Math.random() * 11);
  //   }
  //   const handleRandom = () => {
  //     setRandomNumber(getRandomNumber);
  //   };
  //   useEffect(() => {
  //     if (randomNumber > 5) {
  //       navigate("/login");
  //     }
  //   }, [randomNumber]);
  return (
    <header className="fixed left-0 right-0 top-0 z-10 bg-green-100">
      <div className="header-top-wrap py-2">
        <div className="l-container">
          <div className="header-top-right">
            <ul className="flex justify-end gap-x-6">
              <li>
                <NavLink to="/test">Login</NavLink>
              </li>
              <li>
                <NavLink to="/test">Register</NavLink>
              </li>
              <li>
                <NavLink to="/test">Hello, Coliseum</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="header-mid-wrap">
        <div className="l-container">
          <div className="flex justify-between">
            <ul className="flex gap-x-6">
              <li>Test 1</li>
              <li>Test 2</li>
              <li>Test 3</li>
            </ul>
            <button onClick={scrollToTop}>TOP</button>
          </div>
        </div>
      </div>
      <nav className="header-nav-wrap py-2">
        <div className="l-container">
          <ul className="flex justify-between">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/coliseum">Coliseum</NavLink>
            </li>
            <li>
              <NavLink to="/tournament">Tournament</NavLink>
            </li>
            <li>
              <NavLink to="/author">Author</NavLink>
            </li>
            <li>
              <NavLink to="/mypage">MyPage</NavLink>
            </li>
            <li>
              <NavLink to="/newnovel">New Novel</NavLink>
            </li>
            <li>
              <NavLink to="/tournament-board">Tournament Board</NavLink>
            </li>
            <li>
              <NavLink to="/nav">MyPage</NavLink>
            </li>
            <li>
              <NavLink to="/nav">MyPage</NavLink>
            </li>
            <li>
              <NavLink to="/nav">MyPage</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
