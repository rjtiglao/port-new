import React, { Component } from "react";
import NavBar from "../../components/NavBar/NavBar";
import ContentContainer from "../../components/Container/ContentContainer";
import styled from "styled-components";
import Logo from "../../assets/img/400x139-logo.png";

// STYLED COMPONENTS
const WebLogo = styled.img`
  width: ${props => props.Width || ""};
  height: ${props => props.Height || ""};
  z-index: ${props => props.zIndex || ""};

  right: ${props => props.Right || ""};
  bottom: ${props => props.Bottom || ""};
  left: ${props => props.Left || ""};
  top: ${props => props.Top || ""};
  grid-column-start: ${props => props.gridColumnStart || ""};
  grid-column-end: ${props => props.gridColumnEnd || ""};
  grid-row-start: ${props => props.gridRowStart || ""};
  grid-row-end: ${props => props.gridRowEnd || ""};
`;

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ContentContainer
        conPosition="relative"
        gridTemplateColumns="400px auto"
        gridTemplateRows="200px auto"
      >
        <ContentContainer
          gridColumnStart="1"
          gridRowStart="1"
          bgWidth="100%"
          bgHeight="100%"
          JustifyContent="center"
          AlignContent="center"
          conPosition="relative"
        >
          <WebLogo src={Logo}></WebLogo>
        </ContentContainer>
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
