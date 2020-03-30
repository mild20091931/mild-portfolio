import React, { Component } from 'react';
import styled from 'styled-components';
import color from '../Core/Color'
import { Header,Title,Subtitle } from '../Core/Text';
import { Grid,ButtonGroup,Container,Button, Box } from '@material-ui/core'
import { FaGithub,FaFacebook,FaMedium } from "react-icons/fa";
import { IoIosMail,IoIosPhonePortrait } from "react-icons/io";

const contact = [
  {icon : IoIosMail,text : "tassaneewan.mild@mail.kmutt.ac.th" ,link: "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=tassaneewan.mild@mail.kmutt.ac.th&tf=1"},
  {icon : FaGithub ,text : "github.com/mild-tn" ,link: "https://github.com/mild-tn"},
  {icon : FaFacebook,text: "facebook.com/mmmild1",link: "https://www.facebook.com/mmmild1"},
  {icon : FaMedium,text : "medium.com/@mild20091931",link: "https://medium.com/@mild20091931"},
  {icon : IoIosPhonePortrait,text: "0956787294",link: "-"},
]

// const interests = [
//   { text: "#Web Technology" },
//   { text: "#Frontend Technology" },
//   { text: "#Tool for developer" },
//   { text: "#Linux Command Line" },
// ]

const TextIcon = styled.h1`
  color: ${color.font};
`

const BtnGroup = styled(ButtonGroup)`
  .MuiButton-root{
    color: ${color.font};
  }
  `
const LinkStyle = styled.a`
  color: ${color.font};
  text-decoration: none;
`

const Hr = styled.hr`
  width: 10%;
  background-color: ${color.font};
  margin-top: 3%;
`
class index extends Component {
  render() {
    return (
    <React.Fragment>
      <Container maxWidth="md">
        <Grid item md="12" justify="center">
          <Title textAlign='center' lineHeight='40px'>Profile</Title>
          <Header>My name is Tassneewan Noita. My nick name is Mild. I was born 2nd September 1997. I'm 22 year old.</Header>
        </Grid>
        <Hr/>
        <Grid item md="12">
          <Subtitle lineHeight='0px'>Education</Subtitle>
          <Header lineHeight='22px'>Bachelor of Science (Information Technology), School of Information Technology, King Mongkut’s University of Technology Thonburi (3nd Year)</Header>
        </Grid>
        <Hr/>
        {/* <Grid item md="12">
          <Header>Interests</Header>
            <Grid container direction="row" justify="center" item md="12">
              {interests.map((data,i) => {
                return(
                  <Box m={2} key={i}>
                    <Btn>
                      {data.text}
                    </Btn>
                  </Box>
                )
              })}
            </Grid>
        </Grid> */}
        {/* <Hr/> */}
        <Grid item md="12">
          <Subtitle>Contact</Subtitle>
            <Grid container direction="row" justify="center" item md="12">
              {contact.map((data,i) => {
                return (
                <Box mr={2} ml={2} key={i}>
                <Grid item justify="center">
                <BtnGroup variant="text" size="medium" aria-label="medium contained button group" >
                  <TextIcon>
                    <data.icon/>
                  </TextIcon>
                  <Button>
                    <LinkStyle href={data.link} target="_blank">
                      {data.text}
                    </LinkStyle>
                  </Button>
                </BtnGroup>
                </Grid>
                </Box>
                )
              })}
            </Grid>
        <Hr/>
        </Grid>
      </Container>
    </React.Fragment>
    );
  }
}

export default index;