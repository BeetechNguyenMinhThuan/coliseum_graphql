import { NavLink } from "react-router-dom";

export function SideBarTournamentBoard() {
  return (
    <div className="coli-sidebar">
      <ul className="flex flex-col">
        <li className="border-2 p-5 text-center">
          <NavLink to="/sidebar">Tournament</NavLink>
        </li>
        <li className="border-2 p-5 text-center">
          <NavLink to="/sidebar">議会の規則</NavLink>
        </li>
        <li className="border-2 p-5 text-center">
          <NavLink to="/sidebar">参加者のリスト</NavLink>
        </li>
        <li className="border-2 p-5 text-center">
          <NavLink to="/sidebar">トーナメント表</NavLink>
        </li>
        <li className="border-2 p-5 text-center">
          <NavLink to="/sidebar">ユーザーマニュアル</NavLink>
        </li>
        <li className="border-2 p-5 text-center">
          <NavLink to="/sidebar">カードが注目を集める</NavLink>
        </li>
        <li className="border-2 p-5 text-center">
          <NavLink to="/sidebar">
            <div className="">
              <p>カードが注目を集める</p>
              <span>VS</span>
              <p>カードが注目を集める</p>
            </div>
          </NavLink>
        </li>
        <li className="border-2 p-5 text-center">
          <NavLink to="/sidebar">
            <div className="">
              <p>カードが注目を集める</p>
              <span>VS</span>
              <p>カードが注目を集める</p>
            </div>
          </NavLink>
        </li>
        <li className="border-2 p-5 text-center">
          <NavLink to="/sidebar">
            <h3>バトルロイヤル機能</h3>
            <span>2024 バトルロイヤル機能</span>
          </NavLink>
        </li>
        <li className="border-2 p-5 text-center">
          <NavLink to="/sidebar">
            <h3>バトルロイヤル機能</h3>
            <span>2024 バトルロイヤル機能</span>
          </NavLink>
        </li>
        <li className="border-2 p-5 text-center">
          <NavLink to="/sidebar">
            <h3>バトルロイヤル機能</h3>
            <span>2024 バトルロイヤル機能</span>
          </NavLink>
        </li>
        <li className="border-2 p-5 text-center">
          <NavLink to="/sidebar">広告</NavLink>
        </li>
        <li className="border-2 p-5 text-center">
          <NavLink to="/sidebar">広告</NavLink>
        </li>
        <li className="border-2 p-5 text-center">
          <NavLink to="/sidebar">広告</NavLink>
        </li>
        <li className="border-2 p-5 text-center">
          <NavLink to="/sidebar">広告</NavLink>
        </li>
        <li className="border-2 p-5 text-center">
          <NavLink to="/sidebar">広告</NavLink>
        </li>
        <li className="border-2 p-5 text-center">
          <NavLink to="/sidebar">広告</NavLink>
        </li>
      </ul>
    </div>
  );
}
