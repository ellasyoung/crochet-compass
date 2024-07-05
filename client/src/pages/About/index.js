import React from "react";
import NavbarSearch from "../../components/NavbarSearch";
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
        </div>
    );
};

export default About;
