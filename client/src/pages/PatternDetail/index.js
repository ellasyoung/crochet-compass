import React from 'react';
import { useLocation } from 'react-router-dom';
import NavbarSearch from "../../components/NavbarSearch";
import {
    ImageContainer,
    Image,
    DetailContainer,
    Title,
    Tag,
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
                <ImageContainer>
                    <Image 
                        src={`https://img.youtube.com/vi/${pattern.ytid}/hqdefault.jpg`} 
                        alt={`${pattern.title} thumbnail`} 
                    />
                </ImageContainer>
                <div>
                    {pattern.tags.map((tag, index) => (
                        <Tag key={index} tag={tag}>
                            {tag}
                        </Tag>
                    ))}
                </div>
            </DetailContainer>
        </div>
    );
};

export default PatternDetail;