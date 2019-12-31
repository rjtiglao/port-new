import React from "react";
import styled from "styled-components";

const NavBar = styled.nav`
  display: grid;
  grid-template-rows: 25% 100px auto;
  align-items: center;
  position: absolute;
  z-index: 1;
  overflow-x: hidden;
  color: black;
  transition: 0.5s;
  width: 400px;
  height: 100vh;

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
  grid-gap: 10px;
  align-items: center;
  list-style-type: none;
  a {
  }
`;
const Nav = () => {
  return (
    <NavBar>
      <List>
        <div className="test1">
          <h3>Hi there, I'm</h3>
          <ul>
            <h1>Rj Tiglao</h1>
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
