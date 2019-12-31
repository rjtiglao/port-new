import React, { Component } from "react";
import NavBar from "../../components/NavBar/NavBar";
import ContentContainer from "../../components/Container/ContentContainer";
import styled from "styled-components";
import Logo from "../../assets/img/400x139-logo.png";

// STYLED COMPONENTS
const WebLogo = styled.img`
  width: ${props => props.Width || ""};
  height: ${props => props.Height || ""};
  z-index: ${props => props.zIndex || "-1"};
  position: absolute;
  right: ${props => props.Right || ""};
  bottom: ${props => props.Bottom || ""};
  left: ${props => props.Left || ""};
  top: ${props => props.Top || ""};
`;

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <WebLogo src={Logo}></WebLogo>
        <NavBar />
        <ContentContainer
          marginLeft="400px"
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
      </div>
    );
  }
}

export default HomePage;
