import styled from "styled-components";

export const FooterCont = styled.div`
    background-color: black;
    height: 100px;
    display: flex;
    align-items: center;
    color: white;
    margin-top: 30px;
    @media screen and (max-width: 768px) {
        justify-content: center;
    }
`;

export const Logo = styled.img`
    width: 60px;
    height: 60px;
    margin-left: 50px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const Text = styled.p`
    display: flex;
`;

export const LinksContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: 2%;
    padding-right: 70px;
    @media screen and (max-width: 768px) {
        margin: 0;
        padding: 0;
    }
`;

export const HomeLink = styled.a`
    color: white;
    text-decoration: none;
    margin-right: 10px;
    font-size: 20px;
    padding-left: 1rem;
    &:hover {
        text-decoration: underline;
        font-style: italic;
    }
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const ExternalLink = styled.a`
    margin-left: 10px;
`;

export const Icon = styled.img`
    width: 32px;
    height: 32px;
    margin-left: 32px;
    &:hover {
        opacity: 0.5;
    }
    @media screen and (max-width: 768px) {
        margin: 0 10px 0 10px;
    }
`;