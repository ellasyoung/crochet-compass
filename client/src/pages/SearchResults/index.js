import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NavbarSearch from "../../components/NavbarSearch";
import { 
    ImageContainer,
    Image,
    ResultBox,
    Title,
    ResultsContainer,
    TitleContainter,
    Tag,
} from './SearchResultsElements';

const SearchResults = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { results } = location.state || { results: [] };

    const handleResultClick = (pattern) => {
        navigate(`/pattern-detail/${pattern._id}`, { state: { pattern } });
    };

    return (
        <div>
            <NavbarSearch />
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
        </div>
    );
};

export default SearchResults;