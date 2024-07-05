import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    height: 120px;
    display: flex;
    padding-right: 2%;
    z-index: 12;
    position: sticky;
    top: 0;
    font-size: 18px;
    align-items: center;
`;

export const NavLink = styled(Link)`
    color: #000000;
    font-family: Georgia, serif; 
    display: flex;
    align-items: center;
    text-decoration: none;
    padding-right: 70px;
    height: 100%;
    cursor: pointer;
    &.active {
        color: #000000;
        text-decoration: underline;
    }
    &:hover {
        font-style: italic;
        text-decoration: underline;
    }
    @media screen and (max-width: 768px) {
        padding-bottom: 25px;
        margin-left: 102px;
    }
`;

export const NavTitle = styled(Link)`
    color: #000000;
    font-family: Georgia, serif; 
    font-size: 24px;
    font-weight: bold;
    display: flex;
    justify-content: left;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &:hover {
        font-style: italic;
        text-decoration: underline;
    }
    @media screen and (max-width: 768px) {
        font-size: 18px;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #000000;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        margin-top: 22px;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
    @media screen and (max-width: 768px) {
        display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
        flex-direction: column;
        align-items: flex-start;
        position: absolute;
        top: 85px;
        margin-top: 10px;
        left: 0;
        background: #ffffff;
        padding-bottom: 10px;
        width: 100%;
    }
`;

export const NavLogo = styled.img`
    width: 60px;
    height: 60px;
    display: flex;
    
    margin-left: 50px;
    @media screen and (max-width: 768px) {
        margin-left: 25px;
    }
`;