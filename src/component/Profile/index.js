import React, { Component } from 'react';
import styled from 'styled-components';
import { Header } from '../Core/Text';
import { Grid,Container } from '@material-ui/core'

class index extends Component {
  render() {
    return (
    <React.Fragment>
      <Container maxWidth="md">
        <Grid item md="12">
          <Header>Profile</Header>
        </Grid>
      </Container>
    </React.Fragment>
    );
  }
}

export default index;