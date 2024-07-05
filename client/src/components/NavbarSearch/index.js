import React, { useState } from "react";
import {
    Nav,
    NavLink,
    NavTitle,
    Bars,
    NavMenu,
    NavLogo,
} from "./NavbarSearchElements";
import LogoBlack from "../../assets/LogoBlack.svg";
import NavSearchBar from "../NavSearchBar";

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
                <NavSearchBar></NavSearchBar>
                <Bars onClick={toggleMenu} />
                <NavMenu isOpen={isOpen}>
                    <NavLink to="/about" onClick={toggleMenu}>
                        about
                    </NavLink>
                    <NavLink to="/beginner-pathway" onClick={toggleMenu}>
                        beginner pathway
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default NavbarSearch;