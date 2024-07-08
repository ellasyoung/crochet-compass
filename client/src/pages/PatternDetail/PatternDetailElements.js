import styled from 'styled-components';

export const DetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

export const Title = styled.h1`
    font-size: 2rem;
    margin-bottom: 20px;
`;

export const ImageContainer = styled.div`
    width: 100%;
    max-width: 600px;
    margin-bottom: 20px;
`;

export const Image = styled.img`
    width: 100%;
    height: auto;
`;

export const Tag = styled.span`
    display: inline-block;
    background-color: #f0f0f0;
    color: #333;
    padding: 5px 10px;
    margin: 5px;
    border-radius: 5px;
    font-size: 0.9rem;
`;