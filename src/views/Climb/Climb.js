import React, { Component } from "react";
import NavBar from "../../components/NavBar/NavBar";
import ContentContainer from "../../components/Container/ContentContainer";
import Climb from "../../assets/img/climb.png";
import styled from "styled-components";

const Image = styled.img`
  max-width: 100%;
  height: 100vh;
  z-index: -1;
  position: absolute;
`;

class ClimbPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavBar />
        <ContentContainer
          marginLeft="400px"
          bgHeight="100vh"
          gridTemplateColumns="15% auto 15%"
          gridTemplateRows="15% auto 15%"
          conPosition="relative"
        >
          <Image src={Climb}></Image>
        </ContentContainer>
      </div>
    );
  }
}

export default ClimbPage;
