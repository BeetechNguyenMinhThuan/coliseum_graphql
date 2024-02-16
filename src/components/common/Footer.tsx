import {NavLink} from "react-router-dom";

export function Footer() {
    return <footer className='my-10 pt-5 border-t-2 '>
        <div className="footer-top-wrap">
            <div className="l-container">
                <ul className='flex gap-x-7 justify-center'>
                    <li><NavLink to='/test'>利用規約</NavLink></li>
                    <li><NavLink to='/test'>個人情報保護方針</NavLink></li>
                    <li><NavLink to='/test'>運営会社 株式会社ウエトマエ</NavLink></li>
                </ul>
                <div className="footer-bottom-wrap mt-7">
                    <div className="footer-logo w-[208px] md:w-[375px] mx-auto mb-3">
                        <NavLink to='/'>
                            <img className='w-full' src="/assets/icon/logo.png" alt=""/>
                        </NavLink>
                    </div>
                    <div className="text-center">© 2023 UETOMAE Co.,Ltd.</div>
                </div>
            </div>
        </div>
    </footer>;
}
