import React from 'react';
import './App.css';
import Nav from './component/Core/Navbar';
import Bg from './component/Core/Background';
import Home from './component/Home'
import Profile from './component/Profile'
import color from './component/Core/Color'
import styled from 'styled-components'
import { Container,Grid } from '@material-ui/core'

const BgHome = styled(Grid)`
  height: 100vh;
  z-index:0;
  background-attachment: fixed;
  background-repeat: no-repeat;
  margin-top: 12%;
  `
const BgProfile = styled(Grid)`
  background-color: ${color.bgProfile};
  height: 100vh;
`

function App() {
  return (
    <React.Fragment>
      <Nav/>
      <Container maxWidth="xl">
        <Grid lg={12}>
          <BgHome  justify="center" alignItems="center">
             <Home/>
          </BgHome>
          <Bg/>
        </Grid>
      </Container>
      <BgProfile>
        <Container maxWidth="xl">
          <Profile/>
        </Container>
      </BgProfile>
    </React.Fragment>
  );
}

export default App;
