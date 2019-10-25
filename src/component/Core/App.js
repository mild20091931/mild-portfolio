import React from 'react';
import styled from 'styled-components';
import { Container,Grid } from '@material-ui/core';
import Nav from './Navbar';
import Bg from './Background';
import Home from '../Home';
import Profile from '../Profile';
import Skills from '../Skills';
import Works from '../Works';

const Background = styled(Grid)`
  height: 100vh;
  z-index:0;
  background-attachment: fixed;
  background-repeat: no-repeat;
  `

function App() {
  return (
    <React.Fragment>
      <Nav/>
      <Container maxWidth="xl" id="home" >
        <Background container direction="row" justify="center" alignItems="center" >
          <Home/>
        </Background>
        <Bg />
      <Container maxWidth="xl" id="profile">
        <Background container direction="row" justify="center" alignItems="center">
          <Profile/>
        </Background>
      </Container>
      <Container maxWidth="xl" id="skills">
        <Background container direction="row" justify="center" alignItems="center">
          <Skills/>
        </Background>
      </Container>
      <Container maxWidth="xl" id="works">
        <Background container direction="row" justify="center" alignItems="center">
          <Works/>
        </Background>
      </Container>
      </Container>
    </React.Fragment>
  );
}

export default App;
