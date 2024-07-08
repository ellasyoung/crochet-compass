import React from 'react';
import Search from '../components/Search';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import styled from "styled-components";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  flex: 1;
`;

const Home = () => {
  return (
    <Content>
      <Navbar />
      <ContentWrapper>
        <Search />
      </ContentWrapper>
      <Footer />
    </Content>
  );
};

export default Home;
