import React, { Component } from 'react';
import color from '../Core/Color'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase } from 'react-icons/fa'

class Timeline extends Component {
  render() {
    return (
      <VerticalTimeline>
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: color.bgSkills, color: '#fff' }}
        contentArrowStyle={{ borderRight: `7px solid #72C9A6` }}
        date="2019 - present"
        iconStyle={{ background: '#72C9A6', color: '#fff' }}
        icon={<FaBriefcase />}>
        </VerticalTimelineElement>
      </VerticalTimeline>
    );
  }
}

export default Timeline;