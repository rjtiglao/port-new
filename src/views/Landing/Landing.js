import React, { Component } from "react";
import NavBar from "../../components/NavBar/NavBar";
import ContentContainer from "../../components/Container/ContentContainer";

class HomePage extends Component {
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
