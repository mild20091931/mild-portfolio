import React from 'react';
import styled from 'styled-components';
import { Menu } from '@material-ui/core';

const Nav = styled.nav`
  background-color: #525E65;
  height: 8vh;
  z-index: 999 !important;
  margin: 0;
  padding: 0;
  overflow: hidden;
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

const Navbar = () =>{
  return (
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
  )
}

export default Navbar;