import React, { Component } from "react";
import NavBar from "../../components/NavBar/NavBar";
import ContentContainer from "../../components/Container/ContentContainer";

class AboutMe extends Component {
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
        >
          <ContentContainer
            gridColumnStart="2"
            gridRowStart="2"
            backgroundColor="yellow"
          >
            test
          </ContentContainer>
        </ContentContainer>
      </div>
    );
  }
}

export default AboutMe;
