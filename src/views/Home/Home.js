import React, { Component } from "react";
import NavBar from "../../components/NavBar/NavBar";
import ContentContainer from "../../components/Container/ContentContainer";
import styled from "styled-components";
import Logo from "../../assets/img/400x139-logo.png";

// STYLED COMPONENTS

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ContentContainer gridTemplateColumns="400px auto" gridTemplateRows="">
        <NavBar />
        <ContentContainer
          gridColumnStart="2"
          bgHeight="100vh"
          gridTemplateColumns="15% auto 15%"
          gridTemplateRows="15% auto 15%"
          backgroundColor="grey"
        >
          <ContentContainer
            gridColumnStart="2"
            gridRowStart="2"
            backgroundColor="red"
          >
            test
          </ContentContainer>
        </ContentContainer>
      </ContentContainer>
    );
  }
}

export default HomePage;
