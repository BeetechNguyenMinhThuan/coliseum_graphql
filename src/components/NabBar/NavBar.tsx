import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className='l-container'>
            <ul className="flex gap-4">
                <li>
                    <NavLink end to={`/`}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={`/contact`}>Contact</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;