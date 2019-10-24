import React from 'react';
import Nav from './Navbar';
import Bg from './Background';
import Home from '../Home'
import Profile from '../Profile'
import color from './Color'
import styled from 'styled-components'
import { Container,Box,Grid } from '@material-ui/core'

const Background = styled(Grid)`
  height: 100vh;
  z-index:0;
  background-attachment: fixed;
  background-repeat: no-repeat;
  /* margin-top: 12%; */
  /* position: relative; */
  /* top: 0; */
  `
const BgProfile = styled(Grid)`
  background-color: ${color.bgProfile};
  height: 100vh;
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
      </Container>
    </React.Fragment>
  );
}

export default App;
