import React, { Component } from 'react';
import styled from 'styled-components';
import { Header,Title,Subtitle } from '../Core/Text';
import { Grid,Container,Button, Box } from '@material-ui/core'
import {TagButton} from '../Core/Button'

const contact = [
  {icon : "github",text : "github.com/mild20091931" ,link: "https://github.com/mild20091931"},
  {icon : "facebook",text: "facebook.com/mmmild1",link: "https://www.facebook.com/mmmild1"},
  {icon : "medium",text : "medium.com/@mild20091931",link: "https://medium.com/@mild20091931"},
  {icon : "phone",text: "0956787294",link: "-"},
]
class index extends Component {
  render() {
    return (
    <React.Fragment>
      <Container maxWidth="md">
        <Grid item md="12">
          <Title>Profile</Title>
          <Subtitle>My name is Tassneewan Noita. My nick name is Mild. I was born 2nd September 1997. I'm 22 year old.</Subtitle>
        </Grid>
        <Grid item md="12">
          <Title>Education</Title>
          <Subtitle>Bachelor of Science (Information Technology), School of Information Technology</Subtitle>
          <Subtitle>King Mongkut’s University of Technology Thonburi (3nd Year)</Subtitle>
        </Grid>
        <Grid>
          <Title>Contact</Title>
          <Grid container direction="row" item md="12">
            <Box>
              <Button variant="contained" size="medium" >
                github
              </Button>
             </Box>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
    );
  }
}

export default index;