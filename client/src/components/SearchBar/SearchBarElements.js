import styled from "styled-components";

export const SearchBarCont = styled.form`
    width: 700px;
    border: 4px solid black;
    padding: 15px;
    border-radius: 15px;
    box-sizing: border-box;
    background-color: white;
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px) {
        width: 500px;
    }
    @media screen and (max-width: 500px) {
        width: 300px;
        border: 2px solid black;
    }
`;

export const SearchInput = styled.input`
    font-family: Georgia, serif; 
    font-size: 16px;
    border: none;
    outline: none; 
    flex-grow: 1; 
    margin-right: 10px;
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
