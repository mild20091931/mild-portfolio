import React from 'react';
import './App.css';
import Nav from './component/Core/Navbar';
import Bg from './component/Core/Background';
import Home from './component/Home'
import styled from 'styled-components'
import { Container,Grid } from '@material-ui/core'

const BgHome = styled(Grid)`
  height: 100vh;
  z-index:0;
  margin-top: 12%;
  `

function App() {
  return (
    <React.Fragment>
      <Nav/>
      <Container maxWidth="lg">
        <Grid lg={12}>
          <BgHome  justify="center" alignItems="center">
             <Home/>
          </BgHome>
          <Bg/>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default App;
