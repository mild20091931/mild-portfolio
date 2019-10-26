import React, { Component } from 'react';
import styled from 'styled-components';
import color from '../Core/Color'
import { Container,Grid,Button } from '@material-ui/core';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase } from 'react-icons/fa';
import { MdThumbUp,MdSettings } from 'react-icons/md';
import { IoMdContacts,IoMdPeople,IoMdStar } from 'react-icons/io';
import Carousel from '../Core/Carousel';

const LinkStyle = styled.a`
  color: ${color.font};
  text-decoration: none;
`

const skooldio = [
  {img: "skl_01.jpg"},
  {img: "skl_02.jpg"},
  {img: "skl_03.jpg"},
  {img: "skl_04.png"},
]

const codemania = [
  { img: "codemania_01.jpg"},
  { img: "codemania_02.jpg"},
  { img: "codemania_03.jpg"},
]
const timelineElement = [
  {icon: <MdSettings />,date: "Present",header : "Ask #4.0", subtitle : "I'm developing ask #4.0", carousel: 'none', repo: "none",web: "https://ask.kmutt.ac.th/"},
  {icon: <FaBriefcase />,date: "05/2019 - 07/2019",header : "Internship Skooldio 2019" , subtitle : "I was internship at skooldio", carousel: skooldio, repo: "none", stack: "Next.js | React.js | Node.js | Docker | MariaDB | GraphQL",web: "none"},
  {icon: <IoMdContacts />,date: "06/2019",header : "Staff of Code mania 2019" , subtitle : "I was Staff of Code mania 2019", carousel: codemania , repo: "none", stack: 'none',web: "none"},
  {icon: <MdThumbUp />,date: "12/2018 - 03/2019",header : "Wip Camp #11" , subtitle : "I'm done Wippo and ITIM. Wippo is web for manange WIP Camp #11, I use Next.js for frontend and I use Laravel for backend", carousel: "none" , repo: "https://github.com/wipcamp/11-itimworld", stack: "Next.js | Laravel",web: "https://wippo.wip.camp"},
  {icon: <MdThumbUp />,date: "10/2018 - 12/2018",header : "Vote #IT3k" , subtitle : "Vote IT3K is web for vote Mr. & Miss popular vote IT3K, I use Next.js axios for frontend and I use Laravel with socket.io for backend", carousel: "none" , repo: "none", stack: "Next.js | Laravel | Node.js ", web: "https://bit.ly/2GrGfhL"},
  {icon: <MdThumbUp />,date: "11/2018",header : "Timer" , subtitle : "I use Create-react-app for frontend and I use socket.io with laravel for backend.", carousel: "none" , repo: "https://github.com/alchemist-itbangmod/alchemist-timer.git", stack: 'none',web: "none"},
  {icon: <IoMdPeople />,date: "09/2018 - 11/2018",header : "Leader Team frontend of HelloWorld #Beaver" , subtitle : "It is camp for student (1st year) who want to be developer.", carousel: "none" , repo: "none",stack: 'none',web: "none"},
  {icon: <MdThumbUp />,date: "09/2018 - 11/2018",header : "Passport KMUTT 2018" , subtitle : "Web for activity of student at KMUTT", carousel: "none" , repo: "https://github.com/alchemist-itbangmod/passport2018", stack: 'none',web: "none"},
  {icon: <MdThumbUp />,date: "09/2017 - 11/2017",header : "Wip Camp #10" , subtitle : "WIP CAMP #10 is IT Camp for heigh school of students", carousel: "none" , repo: "https://github.com/wipcamp/10-frontend", stack: 'React.js',web: "none"},
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
                date={data.date}
                iconStyle={{ background: '#72C9A6', color: '#fff' }}
                icon={data.icon}
              >
              <Container maxWidth="md">
                <h1>{data.header}</h1>
                <h3>{data.subtitle}</h3>
                  {data.repo !== 'none' ?
                    <Button>
                      <LinkStyle href={data.repo} target="_blank">
                        View Source Code
                      </LinkStyle>
                    </Button>
                    : ''
                  }
                  {data.web !== 'none' ?
                    <Button>
                      <LinkStyle href={data.web} target="_blank">
                        View WebSite
                      </LinkStyle>
                    </Button>
                    : ''
                  }
                {data.carousel !== 'none' ? <Carousel pic={data.carousel}/>:''}
                <p>{data.stack !== 'none' ? data.stack : ''}</p>
              </Container>
              </VerticalTimelineElement>
            )
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