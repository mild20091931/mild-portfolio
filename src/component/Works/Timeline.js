import React, { Component } from 'react';
import color from '../Core/Color'
import { Container,Grid } from '@material-ui/core';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaThumbsUp } from 'react-icons/fa';
import { Title,Subtitle,Header } from '../Core/Text';
import Carousel from '../Core/Carousel';

const skooldio = [
  {img: "skl_01.jpg"},
  {img: "skl_02.jpg"},
  {img: "skl_03.jpg"},
  {img: "skl_04.png"},
]
class Timeline extends Component {
  render() {
    return (
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: color.bgSkills, color: '#fff' }}
          contentArrowStyle={{ borderRight: `7px solid #525E65` }}
          date="present"
          iconStyle={{ background: '#72C9A6', color: '#fff' }}
          icon={<FaBriefcase />}
        >
          <Header>Ask #4.0</Header>
          <Subtitle>I'm developing ask #4.0</Subtitle>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: color.bgSkills, color: '#fff' }}
          contentArrowStyle={{ borderRight: `7px solid #525E65` }}
          date="03/05/2019 - 31/07/2019"
          iconStyle={{ background: '#72C9A6', color: '#fff' }}
          icon={<FaThumbsUp />}
        >
        <Container maxWidth="md">
          <Title>Internship Skooldio 2019</Title>
          <Subtitle>I was internship at skooldio</Subtitle>
          <Carousel pic={skooldio}/>
        </Container>
        </VerticalTimelineElement>
      </VerticalTimeline>
    );
  }
}

export default Timeline;