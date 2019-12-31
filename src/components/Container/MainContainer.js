import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: grid;
  grid-template-rows: ${props =>
    props.gridTemplateRows || "2fr 2fr 2fr 2fr 2fr"};
  grid-template-columns: ${props =>
    props.gridTemplateColumns || "1fr 1fr 1fr 1fr"};
  grid-gap: ${props => props.gridGap || "0px"};
  margin-left: ${props => props.marginLeft || "0px"};
  background-color: ${props => props.backgroundColor || ""};
  height: ${props => props.bgHeight || ""};
`;

export default MainContainer;
