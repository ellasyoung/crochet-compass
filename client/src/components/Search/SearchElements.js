import styled from "styled-components";

export const SearchContainer = styled.div`
    position: relative; /* Establish containing block for absolute positioning */
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const SearchGraphic = styled.img`
    margin-top: 50px;
    width: 60%;
    height: 60%;
    display: flex;
    @media screen and (max-width: 768px) {
        margin-top: 0px;
        width: 100%;
        height: 100%;
    }
`;

export const SearchBarWrapper = styled.div`
    position: absolute;
    top: 45%;
    width: 100%;
    display: flex;
    justify-content: center; 
    @media screen and (max-width: 768px) {
        top: 35%;
    }
    @media screen and (max-width: 500px) {
        top: 30%;
    }
`;

