import { Link } from 'react-scroll';
import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #525e65;
  height: 8%;
  margin: 0;
  padding: 0;
  width: 100%;
  z-index: 1;
  overflow-x: hidden;
  ul {
    text-align: center;
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
  li a:active {
    color: #72c9a6;
  }
  li a:hover {
    cursor: pointer;
    color: #72c9a6;
  }
`;

const NavStyle = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
`;

class Navbar extends React.Component {
  render() {
    const link = [
      { page: 'Home', to: 'home' },
      { page: 'Profile', to: 'profile' },
      { page: 'Skills', to: 'skills' },
      { page: 'Work Experience', to: 'works' },
    ];
    return (
      <NavStyle>
        <Nav>
          <ul>
            {link.map((data, i) => {
              return (
                <li key={i}>
                  <Link
                    activeClass="active"
                    className={data.to}
                    to={data.to}
                    spy={true}
                    smooth={'easeInOutCubic'}
                    duration={1000}
                    onSetActive={this.handleSetActive}
                  >
                    {data.page}
                  </Link>
                </li>
              );
            })}
          </ul>
        </Nav>
      </NavStyle>
    );
  }
}

export default Navbar;
