import React from 'react';
import { useLocation } from 'react-router-dom';
import NavbarSearch from "../../components/NavbarSearch";
import {
    DetailContainer,
    Title,
    Tag,
    Video,
    VideoContainer,
    TagsContainer,
} from './PatternDetailElements';

const PatternDetail = () => {
    const location = useLocation();
    const { pattern } = location.state || { pattern: null };
    if (!pattern) {
        return <p>No pattern data available.</p>;
    }
    return (
        <div>
            <NavbarSearch />
            <DetailContainer>
                <Title>{pattern.title}</Title>
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
                <p>{pattern.desc}</p>
                <TagsContainer>
                    {pattern.tags.map((tag, index) => (
                        <Tag key={index} tag={tag}>
                            {tag}
                        </Tag>
                    ))}
                </TagsContainer>
            </DetailContainer>
        </div>
    );
};

export default PatternDetail;