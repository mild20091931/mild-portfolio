import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid,Container,Box } from '@material-ui/core';
import { Title,Header } from '../Core/Text';
import color from '../Core/Color'

const skills = [
  { text: "React.js" },{ text: "Next.js"},{ text: "styled-components" }, 
  { text: "Bootstrap" },{ text: "HTML/CSS/JavaScript" },{ text: "Git Command Line" },
  { text: "axios" },{ text: "Laravel" },{ text: "socket.io" },{ text: "Node.js" },
  { text: "Basic Ansible" },{ text: "Agile software development Method" },{ text: "TDD" },
  { text: "MVC Pattern" },{ text: "MVC Pattern" },{ text: "SQL" },{ text: "Photoshop" },
  { text: "illustator" },{ text : "Permiere Pro"},{ text: "Linux Command Line Basic"},
  { text: "Java"},{ text: "Docker"}
]

const Btn = styled.div`
  color: ${color.font};
  border: 1px solid #fff;
  padding: 0.5em;
  border-radius: 7px;
`
class index extends Component {
  render() {
    return (
      <React.Fragment>
        <Container maxWidth="md">
        <Grid item md="12" justify="center">
          <Title textAlign='center'>Skills</Title>
          <Header textAlign='center'>This is my skills,I think I love it.</Header>
        </Grid>
          <Grid item md="12">
            <Grid container direction="row" justify="center" item md="12">
              {skills.map((data,i) => {
                return(
                  <Box m={2} key={i}>
                    <Btn>
                      {data.text}
                    </Btn>
                  </Box>
                )
              })}
            </Grid>
        </Grid>
        </Container>
      </React.Fragment>
    );
  }
}

export default index;