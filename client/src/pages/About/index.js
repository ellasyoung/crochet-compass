import React from "react";
import NavbarSearch from "../../components/NavbarSearch";
import Footer from "../../components/Footer";
import {
    Title,
    TitleContainter,
} from './AboutElements';

const About = () => {
    return (
        <div>
            <NavbarSearch></NavbarSearch>
            <TitleContainter>
                <Title>About CrochetCompass</Title>
            </TitleContainter>
            <Footer></Footer>
        </div>
    );
};

export default About;
