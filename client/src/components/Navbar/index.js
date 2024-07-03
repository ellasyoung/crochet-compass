import React, { useState } from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
} from "./NavbarElements";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Nav>
                <Bars onClick={toggleMenu} />
                <NavMenu isOpen={isOpen}>
                    <NavLink to="/" onClick={toggleMenu}>
                        crochet compass
                    </NavLink>
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

export default Navbar;