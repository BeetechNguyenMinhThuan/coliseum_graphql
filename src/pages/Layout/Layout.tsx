//Component
import Footer from "./Footer/Footer";

//packet
import {Outlet} from "react-router-dom";
import Header from "./Header/Header";
import {useTranslation} from "react-i18next";
import {useState} from "react";

export default function Layout(props) {
    const {i18n} = useTranslation();
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
            <button className={currentLanguage === "ja" ? 'text-orange-500' : ""}
                    onClick={() => handleChangeLanguage("ja")}>Tiếng Nhật
            </button>
            <button className={currentLanguage === "vi" ? 'text-orange-500' : ""}
                    onClick={() => handleChangeLanguage("vi")}>Tiếng Việt
            </button>
            <div id="main-content">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
}
