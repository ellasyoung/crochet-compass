import React from "react";
import NavbarSearch from "../../components/NavbarSearch";
import Footer from "../../components/Footer";
import {
    Title,
    TitleContainter,
    Content,
    ContentWrapper,
} from './BeginnerPathwayElements';

const BeginnerPathway = () => {
    return (
        <Content>   
            <NavbarSearch></NavbarSearch>
            <ContentWrapper>
                <TitleContainter>
                    <Title>Beginner Pathway</Title>
                </TitleContainter>
            </ContentWrapper>
            <Footer></Footer>
        </Content>
    );
};

export default BeginnerPathway;