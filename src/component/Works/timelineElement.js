import { IoMdContacts, IoMdPeople } from 'react-icons/io';
import { MdSettings, MdThumbUp } from 'react-icons/md';

import { FaBriefcase } from 'react-icons/fa';
import React from 'react'

const skooldio = [
  { img: 'skl_01.jpg' },
  { img: 'skl_02.jpg' },
  { img: 'skl_03.jpg' },
  { img: 'skl_04.png' },
];

const codemania = [
  { img: 'codemania_01.jpg' },
  { img: 'codemania_02.jpg' },
  { img: 'codemania_03.jpg' },
];

const py = [{ img: 'Py_01.jpg' }, { img: 'Py_02.jpg' }, { img: 'Py_03.jpg' }, { img: 'Py_04.jpg' }];

const awsBuildOnThailand = [
  { img: 'aws_01.jpg' },
  { img: 'aws_02.jpg' },
  { img: 'aws_03.jpg' }
]
export const timelineElement = [
  {
    icon: <MdThumbUp />,
    date: '09/2017 - 11/2017',
    header: 'Wip Camp #10',
    subtitle: 'WIP CAMP #10 is IT Camp for heigh school of students',
    carousel: 'none',
    repo: 'https://github.com/wipcamp/10-frontend',
    stack: 'React.js',
    web: 'none',
  },
  {
    icon: <MdThumbUp />,
    date: '08/2018 - 09/2018',
    header: 'Passport KMUTT 2018',
    subtitle: 'Web for the activity of students at KMUTT',
    carousel: 'none',
    repo: 'https://github.com/alchemist-itbangmod/passport2018',
    stack: 'none',
    web: 'none',
  },
  {
    icon: <IoMdPeople />,
    date: '09/2018 - 11/2018',
    header: 'Leader Team frontend of HelloWorld #Beaver',
    subtitle: 'It is camp for student (1st year) who want to be developer.',
    carousel: 'none',
    repo: 'none',
    stack: 'none',
    web: 'none',
  },
  {
    icon: <MdThumbUp />,
    date: '11/2018',
    header: 'Timer',
    subtitle: 'I used create-react-app for frontend and I use socket.io with laravel for backend.',
    carousel: 'none',
    repo: 'https://github.com/alchemist-itbangmod/alchemist-timer.git',
    stack: 'none',
    web: 'none',
  },
  {
    icon: <MdThumbUp />,
    date: '10/2018 - 12/2018',
    header: 'Vote #IT3k',
    subtitle:
      'Vote IT3K is web for vote Mr. & Miss popular vote IT3K, I use Next.js axios for frontend and I use Laravel with socket.io for backend',
    carousel: 'none',
    repo: 'none',
    stack: 'Next.js | Laravel | Node.js ',
    web: 'https://bit.ly/2GrGfhL',
  },
  {
    icon: <MdThumbUp />,
    date: '12/2018 - 03/2019',
    header: 'Wip Camp #11',
    subtitle:
      'I have done Wippo and ITIM. Wippo is web for manange WIP Camp #11, I use Next.js for frontend and I use Laravel for backend',
    carousel: 'none',
    repo: 'https://github.com/wipcamp/11-itimworld',
    stack: 'Next.js | Laravel',
    web: 'https://wippo.wip.camp',
  },
  {
    icon: <IoMdContacts />,
    date: '06/2019',
    header: 'Staff of Code mania 2019',
    subtitle: 'I was a Staff of Code mania 2019',
    carousel: codemania,
    repo: 'none',
    stack: 'none',
    web: 'none',
  },
  {
    icon: <FaBriefcase />,
    date: '05/2019 - 07/2019',
    header: 'Internship Skooldio 2019',
    subtitle: 'I was an internship at Skooldio. I worked as a Software Engineer. I developed web application for management of sale course.',
    carousel: skooldio,
    repo: 'none',
    stack: 'Next.js | React.js | Node.js | Docker | MariaDB | GraphQL',
    web: 'none',
  },
  {
    icon: <IoMdContacts />,
    date: '10/2019',
    header: "Hacktoberfest 2019: Let's Get Involved in Open Source",
    subtitle: 'I used to join Hacktoberfest 2019',
    carousel: py,
    repo: 'https://github.com/mild20091931/pyladies-web.git',
    stack: 'HTML | CSS | JavaScript',
    web: 'https://pyladiesbkk.netlify.com',
  },
  {
    icon: <IoMdContacts />,
    date: '01/2020 - 06/2020',
    header: "Internship at Pronto Tools 2020",
    subtitle: 'I was an internship at Pronto Tools. I worked as a Software Engineer. ',
    carousel: 'none',
    repo: 'https://github.com/mild20091931/pyladies-web.git',
    stack: 'HTML | CSS | JavaScript | Python | Django | AWS Lambda | AWS API Gateway | AWS DynamoDB',
    web: 'https://pyladiesbkk.netlify.com',
  },
  {
    icon: <MdSettings />,
    date: '08/2020',
    header: 'ชนะเลิศระดับประเทศในการแข่งขัน AWS Build ON Thailand 2020',
    subtitle: "AWS Build ON Thailand 2020, We are the Champion of Thailand.",
    carousel: awsBuildOnThailand,
    repo: 'none',
    stack: 'AWS Lambda | AWS API Gateway | NEXTJS',
    web: 'https://www.newsplus.co.th/around-town/32976/',
  },
  {
    icon: <MdSettings />,
    date: 'Present',
    header: 'Senior Project',
    subtitle: "The Student of Information Technology Faculty can apply their interesting jobs  by SIT Industry Collaboration Service System.",
    carousel: 'none',
    repo: 'https://github.com/SIT-Careers-Project',
    stack: 'NEXTJS | Laravel | Tailwind',
    web: 'https://dev.sit-industry.systems/',
  },
];