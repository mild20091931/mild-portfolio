import React, { Component } from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import { Hello } from '../Core/Text';
import { Box,Flex } from 'rebass'

const Img = styled.img`
  width: 50%;
  /* position:absolute; */
  display:flex;
  align-self:center;
  justify-self:center;
`

class index extends Component {
  render() {
    return (
      <Flex alignItems="center" justifyContent="center" >
      //look https://styled-system.com/getting-started
        <Box width={1/4} p={3}/>
        <Box width={1/2} p={3}>
        <Hello>
        <Typewriter
          options={{
            strings: ['Hello',`I'm`,'Mild.'],
            autoStart: true,
            loop: true,
          }}
        />
        </Hello>
        </Box>
        <Box  width={1/2}>
          <Img src={'image.png'}/>
        </Box>
      </Flex>
    );
  }
}

export default index;