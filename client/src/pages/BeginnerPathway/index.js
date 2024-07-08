import React from "react";
import NavbarSearch from "../../components/NavbarSearch";
import Footer from "../../components/Footer";
import {
    Title,
    TitleContainter,
} from './BeginnerPathwayElements';

const BeginnerPathway = () => {
    return (
        <div>   
            <NavbarSearch></NavbarSearch>
            <TitleContainter>
                <Title>Beginner Pathway</Title>
            </TitleContainter>
            <Footer></Footer>
        </div>
    );
};

export default BeginnerPathway;