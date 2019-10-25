import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid,Container } from '@material-ui/core';
import { Title } from '../Core/Text';
import color from '../Core/Color';
import Timeline from './Timeline';
class index extends Component {
  render() {
    return (
      <React.Fragment>
        <Container maxWidth="md">
        <Grid item md="12" justify="center">
          <Title textAlign='center' lineHeight='30px'>Work Experience</Title>
        </Grid>
          <Grid item md="12">
            <Grid container direction="row" justify="center" item md="12">
              <Timeline/>
            </Grid>
        </Grid>
        </Container>
      </React.Fragment>
    );
  }
}

export default index;