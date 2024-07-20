import styled from 'styled-components';

export const DetailContainer = styled.div`
    display: flex;
    width: 60%;
    margin-left: 20%;
    margin-right: 20%;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 768px) {
        width: 80%;
        margin-left: 10%;
        margin-right: 10%;
    }
`;

export const SearchCont = styled.div`
    display: none;
    @media screen and (max-width: 768px) {
        margin-top: 30px;
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: -20px;
    }
`;

export const TCont = styled.div`
    display: flex;
    justify-content: left;
    width: 100%;
`;

export const Title = styled.h1`
    font-size: 32px;
    margin-bottom: 10px;
    float: left;
`;

const tagColors = {
    beginner: '#5CE1E6',
    stitches : '#00BF63',
    basics: '#FF66C4',
    granny_square: '#FF914D',
    flower: '#FFDE59',
    puff: '#FF3131',
};

export const TagsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-bottom: 20px;
    margin-top: 20px;
`;

export const Tag = styled.span`
    display: inline-block;
    padding: 7px 14px;
    margin-right: 15px;
    margin-bottom: 8px;
    border-radius: 8px;
    background-color: ${({ tag }) => tagColors[tag.replace(/\s+/g, '_').toLowerCase()] || '#DEEDF3'};
    color: black;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
        transform: scale(1.2); 
    }
`;

export const VideoContainer = styled.div`
    position: relative;
    width: 100%;
    padding-top: 56.25%;
    margin-bottom: 10px;
    margin-top: 75px;
`;

export const Video = styled.iframe`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease-in-out;
    &:hover {
        transform: scale(0.95); 
    }
`;