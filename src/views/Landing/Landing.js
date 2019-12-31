import React, { Component } from "react";
import NavBar from "../../components/NavBar/NavBar";
import ContentContainer from "../../components/Container/ContentContainer";
import Small from "../../components/Container/Small";
import styled from "styled-components";
import SelfCartoon from "../../assets/img/StandingCartoon-100.png";
import Logo from "../../assets/img/logo-rj2-sm.png";
// import SelfCartoon from "../../assets/img/RjStanding2.png";
import Background from "../../assets/img/banner.png";

const Image = styled.img`
  max-width: 100%;
  width: ${props => props.Width || ""};
  height: ${props => props.Height || "100vh"};
  z-index: ${props => props.zIndex || "-1"};
  position: absolute;
  right: ${props => props.Right || ""};
  padding-right: ${props => props.PaddingRight || ""};
`;

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

const Header = styled.h1`
  font-family: "Abril Fatface", cursive;
  font-size: 200px;
  text-shadow: 2px 2px 0px #1e9ee6, 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
const TextBackground = styled.h1`
  font-family: "Abril Fatface", cursive;
  font-size: 100px;
  text-shadow: 2px 2px 0px #1e9ee6, 4px 4px 0px rgba(0, 0, 0, 0.25);
  position: absolute;
  overflow: ${props => props.Overflow || ""};
  margin-left: ${props => props.marginLeft || ""};
  justify-content: ${props => props.JustifyContent || ""};
  align-content: ${props => props.AlignContent || ""};
  grid-column-start: ${props => props.gridColumnStart || ""};
  grid-column-end: ${props => props.gridColumnEnd || ""};
  grid-row-start: ${props => props.gridRowStart || ""};
  grid-row-end: ${props => props.gridRowEnd || ""};
`;

const List = styled.ul`
  display: grid;
  list-style-type: none;
  grid-gap: 5px;
  a {
  }
`;

class LandingPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ContentContainer
          bgHeight="100vh"
          gridTemplateColumns="15% auto 15%"
          gridTemplateRows="15% auto 15%"
          conPosition="relative"
        >
          {/* LAYER 2 Container */}
          <ContentContainer
            bgHeight="100vh"
            bgWidth="100vw"
            gridTemplateColumns="15% auto 15%"
            gridTemplateRows="15% auto 15%"
            conPosition="relative"
          >
            <TextBackground
              // Overflow="hidden"
              gridColumnStart="2"
              gridRowStart="2"
              JustifyContent="center"
              AlignContent="center"
              marginLeft="-5vw"
            >
              Software
            </TextBackground>
            {/* Freelancer DevOps Technical Systems Administrator */}
          </ContentContainer>
          {/* End of layer 2 Container */}

          <ContentContainer
            gridColumnStart="2"
            gridRowStart="2"
            // backgroundColor="red"
            conPosition="relative"
            gridTemplateRows="50% 50%"
            // Border="black 1px solid"
            Overflow="hidden"
          >
            <Image
              src={Background}
              Height="100%"
              Width="100%"
              zIndex="-1"
              Right="0"
            />
            <Image src={SelfCartoon} zIndex="2" Right="0" PaddingRight="10%" />
            <ContentContainer
              gridRowStart="1"
              gridColumnStart="1"
              gridColumnEnd="2"
              // backgroundColor="blue"
              conPosition="relative"
              Overflow="hidden"
              JustifyContent="center"
              AlignContent="center"
            >
              <Header>Engineer</Header>
            </ContentContainer>
            <ContentContainer gridTemplateColumns="50% 50%">
              {/* Description Box */}
              <ContentContainer
                gridColumnStart="1"
                // backgroundColor="rgba(136, 177, 200, 0.25)"
                Margin="0 0 10% 15%"
                gridTemplateRows="25% auto"
                JustifyContent="center"
                // AlignContent="center"
              >
                <Small>
                  <h2>Hey, Glad You Made It!</h2>
                  <h3> Here's a little something about me...</h3>
                </Small>
                <Small Margin="10px 2px 2px 50px">
                  <p>
                    I'm currently working as a Systems Engineer and Freelancer
                    within Silicon Valley. I've worked in technical operations
                    for over a decade, for companies like Argo AI,
                    Sheetmusicplus, Swimoutlet and Host Department.
                  </p>

                  <p>
                    I'm Insaiably curious, driven to innovate, and perpetually
                    plugged into new technologies. You can read more about me
                    <a href="/home"> here</a>!
                  </p>
                  <p>
                    In the meantime, thanks so much for stopping by -- and feel
                    free to say hi through <a href="/home"> email </a>. or my
                    <a href="https://www.linkedin.com/in/rjtiglao/">
                      {" "}
                      linkedin{" "}
                    </a>
                    . profile.
                  </p>
                </Small>
              </ContentContainer>
              {/* end of description Box */}

              <ContentContainer
                gridColumnStart="2"
                // backgroundColor="red"
                conPosition="relative"
                Margin="0 2% 2% 10% "
              >
                {" "}
                <WebLogo src={Logo} zIndex="1" Right="0" Bottom="0" />
              </ContentContainer>
            </ContentContainer>
          </ContentContainer>
        </ContentContainer>
      </div>
    );
  }
}

export default LandingPage;
