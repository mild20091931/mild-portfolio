import React, { Component } from 'react';
import styled from 'styled-components';
import { Header,Title,Subtitle } from '../Core/Text';
import { Grid,Container,Button, Box } from '@material-ui/core'

const contact = [
  {icon : "e-mail",text : "tassaneewan.mild@mail.kmutt.ac.th" ,link: "https://github.com/mild20091931"},
  {icon : "github",text : "github.com/mild20091931" ,link: "https://github.com/mild20091931"},
  {icon : "facebook",text: "facebook.com/mmmild1",link: "https://www.facebook.com/mmmild1"},
  {icon : "medium",text : "medium.com/@mild20091931",link: "https://medium.com/@mild20091931"},
  {icon : "phone",text: "0956787294",link: "-"},
]

const Interests = [{
  text: "Web Technology",
  text: "Frontend Technology",
  text: "Tool for developer",
  text: "linux"
}]
class index extends Component {
  render() {
    return (
    <React.Fragment>
      <Container maxWidth="md" >
        <Grid item md="12">
          <Title>Profile</Title>
          <Subtitle>My name is Tassneewan Noita. My nick name is Mild. I was born 2nd September 1997. I'm 22 year old.</Subtitle>
        </Grid>
        <Grid item md="12">
          <Title>Education</Title>
          <Subtitle>Bachelor of Science (Information Technology), School of Information Technology</Subtitle>
          <Subtitle>King Mongkut’s University of Technology Thonburi (3nd Year)</Subtitle>
        </Grid>
        <Grid item md="12">
          <Title>Interests</Title>
          <Button variant="outlined" color="white">
            Disabled
          </Button>
        </Grid>
        <Grid>
          <Title>Contact</Title>
          <Grid container direction="row" justify="center" item md="12">
          {contact.map((data,i) => {
            return (
            <Box m={2} key={i}>
              <Button variant="contained" size="medium" >
                {data.icon}
              </Button>
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