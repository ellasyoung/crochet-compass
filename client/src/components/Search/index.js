import React from 'react';
import SearchBar from "../SearchBar";
import {
    SearchGraphic,
    SearchContainer,
    SearchBarWrapper
} from "./SearchElements";
import SearchBarGraphic from '../../assets/SearchBarGraphic.png'

const Search = () => {
  return (
    <>
        <SearchContainer>
            <SearchGraphic src={SearchBarGraphic} alt=""/>
            <SearchBarWrapper>
                <SearchBar />
            </SearchBarWrapper>
        </SearchContainer>
    </>
  );
};

export default Search;
