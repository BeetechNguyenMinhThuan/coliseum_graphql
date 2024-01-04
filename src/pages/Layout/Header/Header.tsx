import {Link, NavLink} from "react-router-dom";

export default function Header(props) {
    return (
        <>
            <nav>
                <ul className="flex justify-center gap-4">
                    <li>
                        <NavLink  end to={`/`}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={`/contact`}>Contact</NavLink>
                    </li>
                </ul>
            </nav>
            <header>This is a header</header>
        </>
    );
}
