import React, { Component } from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import { Hello,Subtitle } from '../Core/Text';
import { Grid } from '@material-ui/core'

const Img = styled.img`
  width: 50%;
  margin-left: 5%;
`

const Welcome = styled(Subtitle)`
  text-align:right;
`

const FontText = styled.p`
  text-align: right;
  color: #fff;
`
class index extends Component {
  render() {
    return (
      <React.Fragment>
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
          <Welcome>Welcome to my resume</Welcome>
          <FontText>I'm web developer and I want to be software engineer.</FontText>
        </Grid>
        <Grid item lg={6}>
          <Img src={'profile.png'}/>
        </Grid>
      </React.Fragment>
    );
  }
}

export default index;