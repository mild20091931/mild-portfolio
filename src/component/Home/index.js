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

const GridStyle = styled(Grid)`
  @media only screen and (max-width: 769px) {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
  }
`

const FontText = styled.p`
  text-align: right;
  color: #fff;
`
class index extends Component {
  render() {
    return (
      <React.Fragment>
        <Grid item lg={6} xs={6}>
        <Hello>
          <Typewriter
            options={{
              strings: ['Hello',`I'm `, 'Mild.'],
              autoStart: true,
              loop: true,
            }}
          />
        </Hello>
          <Welcome>Welcome to my portfolio</Welcome>
          <FontText>I am passionate and enjoy software development.</FontText>
        </Grid>
        <GridStyle item lg={6} xs={6}>
          <Img src={'profile.png'}/>
        </GridStyle>
      </React.Fragment>
    );
  }
}

export default index;