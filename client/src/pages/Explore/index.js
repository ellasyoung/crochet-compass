import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavbarSearch from "../../components/NavbarSearch";
import Footer from "../../components/Footer";
import {
    Title,
    TitleContainter,
    Content,
    ContentWrapper,
    ImageContainer,
    Image,
    ResultBox,
    ResultsContainer,
    Tag,
    SearchCont,
    TextCont,
} from './ExploreElements';

const Explore = () => {

    const [patterns, setPatterns] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPatterns = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/patterns');
                setPatterns(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchPatterns();
    }, []);
    
    const handleResultClick = (pattern) => {
        navigate(`/pattern-detail/${pattern._id}`, { state: { pattern } });
    };

    return (
        <Content>
            <NavbarSearch></NavbarSearch>
            <ContentWrapper>
                <TitleContainter>
                    <Title>Explore All Patterns</Title>
                </TitleContainter>
                <ResultsContainer>
                    {patterns.length > 0 ? (
                        patterns.map((pattern) => (
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

export default Explore;
