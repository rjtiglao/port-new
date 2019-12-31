import React from "react";
import styled from "styled-components";

const NavBar = styled.nav`
  display: grid;
  align-items: center;
  position: absolute;
  z-index: 1;
  overflow-x: hidden;
  color: black;
  transition: 0.5s;
  width: 100%;
  grid-column-start: ${props => props.gridColumnStart || ""};
  grid-column-end: ${props => props.gridColumnEnd || ""};
  grid-row-start: ${props => props.gridRowStart || ""};
  grid-row-end: ${props => props.gridRowEnd || ""};

  ul {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    list-style-type: none;
  }
`;

const List = styled.ul`
  display: grid;
  grid-row-start: 2;
  grid-gap: 15px;
  align-items: center;
  list-style-type: none;
  a {
  }
`;

const Nav = () => {
  return (
    <NavBar gridRowStart="2">
      <List>
        <div>
          <h3>Hi there, I'm</h3>
          <ul>
            <h2>Rj Tiglao</h2>
          </ul>
        </div>
        <h3>Welcome to my portfolio!</h3>
        <ul>
          <li>
            <a href="/about">About Me</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          {/*This is the background from where I started to where I am  */}
          {/* interactive page to the top following the dots */}
          <li>
            <a href="/climb">The Climb</a>
          </li>
        </ul>
      </List>
    </NavBar>
  );
};

export default Nav;
