import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NavbarSearch from "../../components/NavbarSearch";
import Footer from "../../components/Footer";
import SearchBar from "../../components/SearchBar"
import { 
    ImageContainer,
    Image,
    ResultBox,
    Title,
    ResultsContainer,
    TitleContainter,
    Tag,
    SearchCont,
} from './SearchResultsElements';
import styled from "styled-components";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  flex: 1;
`;

const SearchResults = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { results } = location.state || { results: [] };

    const handleResultClick = (pattern) => {
        navigate(`/pattern-detail/${pattern._id}`, { state: { pattern } });
    };

    return (
        <Content>
            <NavbarSearch />
            <ContentWrapper>
                <SearchCont>
                    <SearchBar></SearchBar>
                </SearchCont>
                <TitleContainter>
                    <Title>Search Results</Title>
                </TitleContainter>
                <ResultsContainer>
                    {results.length > 0 ? (
                        results.map((pattern) => (
                            <ResultBox key={pattern._id} onClick={() => handleResultClick(pattern)}>
                                <ImageContainer>
                                    <Image 
                                        src={`https://img.youtube.com/vi/${pattern.ytid}/hqdefault.jpg`} 
                                        alt={`${pattern.title} thumbnail`} 
                                    />
                                </ImageContainer>
                                <h3>{pattern.title}</h3>
                                <div>
                                    {pattern.tags.map((tag, index) => (
                                        <Tag key={index} tag={tag}>
                                            {tag}
                                        </Tag>
                                    ))}
                                </div>
                            </ResultBox>
                        ))
                    ) : (
                        <p>No results found.</p>
                    )}
                </ResultsContainer>
            </ContentWrapper>
            <Footer></Footer>
        </Content>
    );
};

export default SearchResults;