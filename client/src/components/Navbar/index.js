import React, { useState } from "react";
import {
    Nav,
    NavLink,
    NavTitle,
    Bars,
    NavMenu,
    NavLogo
} from "./NavbarElements";
import LogoBlack from "../../assets/LogoBlack.svg";

const Navbar = () => {
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
                    <NavLink to="/explore" onClick={toggleMenu}>
                        explore
                    </NavLink>
                    <NavLink to="/beginner-pathway" onClick={toggleMenu}>
                        beginner pathway
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;