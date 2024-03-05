import { NavLink } from "react-router-dom";

export function Footer() {
  return (
    <footer className="my-10 border-t-2 pt-5 ">
      <div className="footer-top-wrap">
        <div className="l-container">
          <ul className="flex justify-center gap-x-7">
            <li>
              <NavLink to="/use-regulations">利用規約</NavLink>
            </li>
            <li>
              <NavLink to="/protection-policy">個人情報保護方針</NavLink>
            </li>
            <li>
              <a href="https://uetomae.co.jp" target="blank">
                運営会社
              </a>
            </li>
            <li>
              <a href="https://uetomae.co.jp" target="blank">
                運営会社
              </a>
            </li>
          </ul>
          <div className="footer-bottom-wrap mt-7">
            <div className="footer-logo mx-auto mb-3 w-[208px] md:w-[375px]">
              <NavLink to="/">
                <img className="w-full" src="/assets/icon/logo.png" alt="" />
              </NavLink>
            </div>
            <div className="text-center">© 2023 UETOMAE Co.,Ltd.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
