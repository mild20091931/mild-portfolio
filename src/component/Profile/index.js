import React, { Component } from 'react';
import styled from 'styled-components';
import { Header,Title,Subtitle } from '../Core/Text';
import { Grid,ButtonGroup,Container,Button, Box } from '@material-ui/core'
import { FaGithub,FaFacebook,FaMedium } from "react-icons/fa"; 
import { IoIosMail,IoIosPhonePortrait } from "react-icons/io"; 

const contact = [
  {icon : IoIosMail,text : "tassaneewan.mild@mail.kmutt.ac.th" ,link: "https://github.com/mild20091931"},
  {icon : FaGithub ,text : "github.com/mild20091931" ,link: "https://github.com/mild20091931"},
  {icon : FaFacebook,text: "facebook.com/mmmild1",link: "https://www.facebook.com/mmmild1"},
  {icon : FaMedium,text : "medium.com/@mild20091931",link: "https://medium.com/@mild20091931"},
  {icon : IoIosPhonePortrait,text: "0956787294",link: "-"},
]

const interests = [
  { text: "#Web Technology" },
  { text: "#Frontend Technology" },
  { text: "#Tool for developer" },
  { text: "#Linux Command Line" },
]

const TextIcon = styled.h1`
  color: #fff;
`

const BtnGroup = styled(ButtonGroup)`
  .MuiButton-root{
    color: #fff;
  }
`
const Btn = styled.div`
  color: #fff;
  border: 1px solid #fff;
  padding: 0.5em;
  border-radius: 7px;
`

const Hr = styled.hr`
  width: 10%;
  background-color: #fff;
  margin-top: 3%;
`
class index extends Component {
  render() {
    return (
    <React.Fragment>
      <Container maxWidth="md">
        <Grid item md="12" justify="center">
            <Title textAlign='center' lineHeight='30px'>Profile</Title>
            <Subtitle>My name is Tassneewan Noita. My nick name is Mild. I was born 2nd September 1997. I'm 22 year old.</Subtitle>
        </Grid>
        <Hr/>
        <Grid item md="12">
            <Header lineHeight='10px'>Education</Header>
            <Subtitle lineHeight='22px'>Bachelor of Science (Information Technology), School of Information Technology, King Mongkut’s University of Technology Thonburi (3nd Year)</Subtitle>
        </Grid>
        <Hr/>
        <Grid item md="12">
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
        </Grid>
        <Hr/>
        <Grid item md="12">
          <Header>Contact</Header>
          <Grid container direction="row" justify="center" item md="12">
          {contact.map((data,i) => {
            return (
            <Box mr={2} ml={2} key={i}>
            <Grid item justify="center">
            <BtnGroup variant="text" size="medium" aria-label="medium contained button group" >
              <TextIcon>
                <data.icon/>
              </TextIcon>
              <Button>{data.text}</Button>
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