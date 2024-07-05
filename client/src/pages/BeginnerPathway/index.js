import React from "react";
import NavbarSearch from "../../components/NavbarSearch";
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
        </div>
    );
};

export default BeginnerPathway;