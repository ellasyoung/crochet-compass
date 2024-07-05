import styled from "styled-components";

export const SearchBarCont = styled.form`
    border: 1px solid black;
    padding: 10px 15px 10px 15px;
    border-radius: 15px;
    box-sizing: border-box;
    background-color: white;
    display: flex;
    align-items: center;
    width: 200%;
    margin-left: 50px;
    @media screen and (max-width: 1350px) {
        width: 100%;
    }
    @media screen and (max-width: 1100px) {
        display: none;
    }
`;

export const SearchInput = styled.input`
    font-family: Georgia, serif; 
    font-size: 16px;
    border: none;
    outline: none; 
    flex-grow: 1; 
`;

export const SearchButton = styled.button`
    border: none;
    cursor: pointer;
    background-color: #ffffff;
    float: right;

    &:hover {
        color: #fdb0c0;
    }

    svg {
        width: 20px;
        height: 20px;
    }
`;
