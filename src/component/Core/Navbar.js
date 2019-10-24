import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #525E65;
  height: 8vh;
  z-index: 999 !important;
  margin: 0;
  padding: 0;
  width: 100%;
  z-index: 1;
  overflow-x: hidden;
  ul {
    text-align:center;
    padding: 0;
  }
  li {
    list-style-type: none;
    display: inline-block;
  }
  li a {
    text-decoration: none;
    display: block;
    color: white;
    text-align: center;
    width: 150px;
    transition: 0.4s;
  }
  li a:hover {
    cursor: pointer;
    color: #72C9A6;
  }
  `

const NavStyle = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
`

class Navbar extends React.Component{
  render () {
    return (
      <NavStyle>
      <Nav>
        <ul>
          <li>
            <a href="home">Home</a>
          </li>
          <li>
            <a href="profile">Profile</a>
          </li>
          <li>
            <a href="work">Work Experience</a>
          </li>
          <li>
            <a href="skills">Skills</a>
          </li>
        </ul>
      </Nav>
      </NavStyle>
    )
  }
}

export default Navbar;