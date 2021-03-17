import 'react-vertical-timeline-component/style.min.css';

import { Box, Button, Container } from '@material-ui/core';
import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import Carousel from '../Core/Carousel';
import { IoMdStar } from 'react-icons/io';
import color from '../Core/Color';
import styled from 'styled-components';
import { timelineElement } from './timelineElement'

const LinkStyle = styled.a`
  color: ${color.font};
  text-decoration: none;
`;

class Timeline extends Component {
  render() {
    return (
      <VerticalTimeline>
        {timelineElement.map((data, i) => {
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: color.bgSkills, color: '#fff' }}
              contentArrowStyle={{ borderRight: `7px solid #525E65` }}
              date={data.date}
              iconStyle={{ background: '#72C9A6', color: '#fff' }}
              icon={data.icon}
            >
              <Container maxWidth="md">
                <h1>{data.header}</h1>
                <h3>{data.subtitle}</h3>
                {data.repo !== 'none' ? (
                  <Button>
                    <LinkStyle href={data.repo} target="_blank">
                      View Source Code
                    </LinkStyle>
                  </Button>
                ) : (
                  ''
                )}
                {data.web !== 'none' ? (
                  <Button>
                    <LinkStyle href={data.web} target="_blank">
                      View WebSite
                    </LinkStyle>
                  </Button>
                ) : (
                  ''
                )}
                {data.carousel !== 'none' ? (
                  <Box m={2}>
                    <Carousel pic={data.carousel} />
                  </Box>
                ) : (
                  ''
                )}
                <p>{data.stack !== 'none' ? data.stack : ''}</p>
              </Container>
            </VerticalTimelineElement>
          );
        })}
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<IoMdStar />}
        />
      </VerticalTimeline>
    );
  }
}

export default Timeline;
