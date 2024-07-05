import React, { useState } from "react";
import {
    Nav,
    NavLink,
    NavTitle,
    Bars,
    NavMenu,
    NavLogo
} from "./NavbarSearchElements";
import LogoBlack from "../../assets/LogoBlack.svg";

const NavbarSearch = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Nav>
                <NavLogo src={LogoBlack} alt="" />
                <NavTitle to="/" onClick={toggleMenu}>
                    CrochetCompass
                </NavTitle>
                <Bars onClick={toggleMenu} />
                <NavMenu isOpen={isOpen}>
                    <NavLink to="/about" onClick={toggleMenu}>
                        about
                    </NavLink>
                    <NavLink to="/events" onClick={toggleMenu}>
                        beginner pathway
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default NavbarSearch;