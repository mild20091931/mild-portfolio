import React, { Component } from 'react';
import color from '../Core/Color'
import { Container,Grid } from '@material-ui/core';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase } from 'react-icons/fa';
import { Subtitle,Header } from '../Core/Text';
import Carousel from '../Core/Carousel';


const skooldio = [
  {img: "skl_01.jpg"},
  {img: "skl_02.jpg"},
  {img: "skl_03.jpg"},
  {img: "skl_04.png"},
]
const timelineElement = [
  {header : "Ask #4.0", subtitle : "I'm developing ask #4.0", carousel: 'none'},
  {header : "Internship Skooldio 2019" , subtitle : "I was internship at skooldio", carousel: skooldio},
]
class Timeline extends Component {
  render() {
    return (
      <VerticalTimeline>
          {timelineElement.map((data,i) => {
            return (
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: color.bgSkills, color: '#fff' }}
                contentArrowStyle={{ borderRight: `7px solid #525E65` }}
                date="present"
                iconStyle={{ background: '#72C9A6', color: '#fff' }}
                icon={<FaBriefcase />}
              >
              <Container maxWidth="md">
                <Header>{data.header}</Header>
                <Subtitle>{data.subtitle}</Subtitle>
                {data.carousel !== 'none' ? <Carousel pic={data.carousel}/>:''}
              </Container>
              </VerticalTimelineElement>
            )
          })}
      </VerticalTimeline>
    );
  }
}

export default Timeline;