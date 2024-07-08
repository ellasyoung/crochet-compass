import React from "react";
import {
    FooterCont,
    Logo,
    LinksContainer,
    HomeLink,
    ExternalLink,
    Icon,
} from './FooterElements';
import LogoWhite from '../../assets/LogoWhite.svg';
import GitHubIcon from '../../assets/GitHubIcon.svg';
import LinkedInIcon from '../../assets/LinkedInIcon.svg';

const Footer = () => {
    return (
        <FooterCont>
            <Logo src={LogoWhite} alt='Logo' />
            <HomeLink href="/">CrochetCompass</HomeLink>
            <p>by ellasyoung</p>
            <LinksContainer>
                <ExternalLink href="https://github.com/ellasyoung" target="_blank" rel="noopener noreferrer">
                    <Icon src={GitHubIcon} alt="GitHub" />
                </ExternalLink>
                <ExternalLink href="https://linkedin.com/in/ellasyoung" target="_blank" rel="noopener noreferrer">
                    <Icon src={LinkedInIcon} alt="LinkedIn" />
                </ExternalLink>
            </LinksContainer>
        </FooterCont>
    );
};

export default Footer;