import styled from "styled-components";

const tagColors = {
    beginner: '#5CE1E6',
    stitches : '#00BF63',
    basics: '#FF66C4',
    granny_square: '#FF914D',
    scarf: '#363636',
    flower: '#FFDE59',
    puff: '#FF3131',
};

export const ResultsContainer = styled.div`
    width: 90%;
    margin-left: 5%;
    margin-top: 25px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

export const TitleContainter = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: black;
    color: white;
`;

export const Title = styled.h1`
    font-size: 32px;
`;

export const ImageContainer = styled.div`
    width: 320px;
    height: 180px;
    border-radius: 14px;
    overflow: hidden;
    position: relative;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const ResultBox = styled.div`
    background-color: white;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    border-radius: 18px;
    padding: 20px;
    margin: 20px;
    transition: box-shadow 0.3s ease-in-out;
    width: 320px;
    &:hover {
        box-shadow: 0 16px 32px rgba(0, 0, 0, 0.4);
    }
    > p {
        margin-top: 10px;
    }
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
    transition: transform 0.3s ease-in-out;  /* Add transition for smooth scaling */
    &:hover {
        transform: scale(1.2);  /* Scale up slightly on hover */
    }
`;
