import React from 'react';
import { useLocation } from 'react-router-dom';
import NavbarSearch from "../../components/NavbarSearch";
import { 
    ImageContainer,
    Image,
    ResultBox,
    Title,
    ResultsContainer,
    TitleContainter,
} from './SearchResultsElements';

const SearchResults = () => {
    const location = useLocation();
    const { results } = location.state || { results: [] };

    return (
        <div>
            <NavbarSearch />
            <TitleContainter>
                <Title>Search Results</Title>
            </TitleContainter>
            <ResultsContainer>
                {results.length > 0 ? (
                    results.map((pattern) => (
                        <ResultBox key={pattern._id}>
                            <ImageContainer>
                                <Image 
                                    src={`https://img.youtube.com/vi/${pattern.ytid}/hqdefault.jpg`} 
                                    alt={`${pattern.title} thumbnail`} 
                                />
                            </ImageContainer>
                            <h3>{pattern.title}</h3>
                            <p>Tags: {pattern.tags.join(', ')}</p>
                        </ResultBox>
                    ))
                ) : (
                    <p>No results found.</p>
                )}
            </ResultsContainer>
        </div>
    );
};

export default SearchResults;

