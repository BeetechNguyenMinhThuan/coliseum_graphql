//Component

//packet
import {Outlet} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useState} from "react";
import {Footer, Header} from "components/Common";
import {Banner} from "components/Banner";
import {useLocation} from 'react-router-dom';

export default function Layout() {
    const {i18n} = useTranslation();
    const location = useLocation();

    const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem('current_language') || "ja");
    const handleChangeLanguage = (lang: string) => {
        setCurrentLanguage(lang)
        i18n.changeLanguage(lang)
        localStorage.setItem('current_language', lang);
    }
    /**
     * render template
     */
    return (
        <div id="app">
            <Header/>
            {/* <button className={currentLanguage === "ja" ? 'text-orange-500' : ""}
                    onClick={() => handleChangeLanguage("ja")}>Tiếng Nhật
            </button>
            <button className={currentLanguage === "vi" ? 'text-orange-500' : ""}
                    onClick={() => handleChangeLanguage("vi")}>Tiếng Việt
            </button> */}
            <div className="mt-[108px]">
                {location.pathname !== '/author' && location.pathname !== '/newnovel' ? <Banner/> : ''}
            </div>
            <div className='main-content mt-[20px]'>
                <div className="l-container">
                    <div className="flex gap-x-3">
                        <Outlet/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
