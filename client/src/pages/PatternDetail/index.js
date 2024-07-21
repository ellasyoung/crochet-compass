import React from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import NavbarSearch from "../../components/NavbarSearch";
import Footer from "../../components/Footer";
import SearchBar from "../../components/SearchBar";
import {
    DetailContainer,
    Title,
    Tag,
    Video,
    VideoContainer,
    TagsContainer,
    SearchCont,
    TCont,
} from './PatternDetailElements';

const PatternDetail = () => {
    const location = useLocation();
    const { pattern } = location.state || { pattern: null };

    const navigate = useNavigate();

    const fetchSearchResults = async (searchQuery) => {
        try {
            const response = await axios.get(`https://us-central1-crochetcompass.cloudfunctions.net/api/patterns?search=${searchQuery}`);
            navigate('/search-results', { state: { results: response.data, query: searchQuery } });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    if (!pattern) {
        return <p>No pattern data available.</p>;
    }

    return (
        <div>
            <NavbarSearch />
            <SearchCont>
                <SearchBar />
            </SearchCont>
            <DetailContainer>
                <VideoContainer>
                    <Video
                        title={pattern.title}
                        width="560"
                        height="315"
                        src={`http://www.youtube.com/embed/${pattern.ytid}`}
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </VideoContainer>
                <TCont>
                    <Title>{pattern.title}</Title>
                </TCont>
                <TCont>{pattern.desc}</TCont>
                <TagsContainer>
                    {pattern.tags.map((tag, index) => (
                        <Tag key={index} tag={tag} onClick={() => { fetchSearchResults(tag); }}>
                            {tag}
                        </Tag>
                    ))}
                </TagsContainer>
            </DetailContainer>
            <Footer />
        </div>
    );
};

export default PatternDetail;