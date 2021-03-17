import { Box, Container, Grid } from '@material-ui/core';
import { Header, Title } from '../Core/Text';
import React, { Component } from 'react';

import color from '../Core/Color'
import styled from 'styled-components';

const skills = [
    "React.js", "Next.js","styled-components","Bootstrap",
    "HTML/CSS/JavaScript" ,"Git Command Line", "axios" ,"Laravel" ,
    "socket.io" ,"Node.js", "Basic Ansible" ,"Agile Software Development Method" ,
    "TDD","MVC Pattern" ,"MVC Pattern" ,"SQL" ,"PhotoShop",
    "illustrator","Premiere Pro","Linux Command Line Basic",
    "Java","Docker", "Python", "AWS Lambda", "AWS API Gateway", "AWS DynamoDB",
    "Google Could Shell", "tailwind", "Material-UI", "Django",
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
                      {data}
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