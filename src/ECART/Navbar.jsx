import react, { useState } from "react";
import reactDom from "react-dom";
import { NavLink } from "react-router-dom";
import "./Style.css";
import home_ecart_logo from "./images/logo-ecart.png";
import cart_icon from "./images/cart.png";
import home_ecart_logo_black from "./images/logo-ecart-black.png";
import menu_bar from "./images/menu.png";

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    return (
        <>
            <div className="container">
                <div className="navbar">
                    <div className="logo">
                        <img src={home_ecart_logo_black} alt="" width="125px" />
                    </div>
                    <nav>
                        <ul id={menu ? "MenuItems" : ""}>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/product">Product</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">Contact</NavLink>
                            </li>
                            <li>
                                <NavLink to="/account">Account</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <NavLink to="/cart">
                        <img src={cart_icon} alt="" width="30px" height="30px" />
                    </NavLink>
                    <img
                        src={menu_bar}
                        alt=""
                        width="30px"
                        height="30px"
                        className="menu-icon"
                        onClick={()=> setMenu(!menu)}
                    />
                </div>
            </div>
        </>
    );
};
export default Navbar;
