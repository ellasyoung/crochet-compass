import React from "react";
import NavbarSearch from "../../components/NavbarSearch";
import Footer from "../../components/Footer";
import {
    Title,
    TitleContainter,
    Content,
    ContentWrapper,
} from './AboutElements';

const About = () => {
    return (
        <Content>
            <NavbarSearch></NavbarSearch>
            <ContentWrapper>
                <TitleContainter>
                    <Title>About CrochetCompass</Title>
                </TitleContainter>
            </ContentWrapper>
            <Footer></Footer>
        </Content>
    );
};

export default About;
