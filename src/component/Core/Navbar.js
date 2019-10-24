import React from 'react';
import styled from 'styled-components';
import { Link, DirectLink, Element , Events, animateScroll, scrollSpy, scroller } from 'react-scroll'

const Nav = styled.nav`
  background-color: #525E65;
  height: 8vh;
  z-index: 999 !important;
  margin: 0;
  padding: 0;
  width: 100%;
  z-index: 1;
  overflow-x: hidden;
  ul {
    text-align:center;
    padding: 0;
  }
  li {
    list-style-type: none;
    display: inline-block;
  }
  li a {
    text-decoration: none;
    display: block;
    color: white;
    text-align: center;
    width: 150px;
    transition: 0.4s;
  }
  li a:hover {
    cursor: pointer;
    color: #72C9A6;
  }
  `

const NavStyle = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
`

class Navbar extends React.Component{
  constructor (props){
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
}

componentDidMount() {

  Events.scrollEvent.register('begin', function() {
    console.log("begin", arguments);
  });

  Events.scrollEvent.register('end', function() {
    console.log("end", arguments);
  });

}
scrollToTop() {
  scroller.scrollToTop();
}
scrollTo(offset) {
  scroller.scrollTo('scroll-to-element', {
    duration: 800,
    delay: 0,
    smooth: 'easeInOutQuart',
    offset: offset
  })
}
scrollToWithContainer() {

  let goToContainer = new Promise((resolve, reject) => {

    Events.scrollEvent.register('end', () => {
      resolve();
      Events.scrollEvent.remove('end');
    });

    scroller.scrollTo('scroll-container', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });

  });

  goToContainer.then(() =>  
      scroller.scrollTo('scroll-container-second-element', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
          containerId: 'scroll-container'
      }));
}
componentWillUnmount() {
  Events.scrollEvent.remove('begin');
  Events.scrollEvent.remove('end');
}
  render () {
    return (
      <NavStyle>
      <Nav>
        <ul>
          <li>
          <Link activeClass="active" className="home" to="home" spy={true} smooth={true} duration={500} >Home</Link>
          </li>
          <li>
          <Link activeClass="active" className="profile" to="profile" spy={true} smooth={true} duration={500} >Profile</Link>
          </li>
          <li>
          <Link activeClass="active" className="skills" to="skills" spy={true} smooth={true} duration={500} >Skills</Link>
          </li>
          <li>
          <Link activeClass="active" className="works" to="works" spy={true} smooth={true} duration={500} >Work Experience</Link>
          </li>
        </ul>
      </Nav>
      </NavStyle>
    )
  }
}

export default Navbar;