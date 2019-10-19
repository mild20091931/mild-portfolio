import React, { Component } from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import { Hello,Header } from '../Core/Text';
import { Box,Container,Grid } from '@material-ui/core'

const Img = styled.img`
  width: 50%;
  margin-left: 5%;
`

const Welcome = styled(Header)`
  text-align:right;
`

const FontText = styled.p`
  text-align: right;
  color: #fff;
`

class index extends Component {
  render() {
    return (
      <Grid container direction="row" justify="center" alignItems="center"  >
        <Grid item lg={6} >
        <Hello>
        <Typewriter
          options={{
            strings: ['Hello',`I'm Mild.`],
            autoStart: true,
            loop: true,
          }}
        />
        </Hello>
          <Welcome>Welcome to my portfolio</Welcome>
          <FontText>I'm web developer and I want to be software engineer.</FontText>
        </Grid>
        <Grid item lg={6}>
          <Img src={'profile.png'}/>
        </Grid>
      </Grid>
    );
  }
}

export default index;