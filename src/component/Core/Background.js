import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import color from './Color';
import '../../style.css' // // Icons made by Freepik from www.flaticon.com

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8}px,${y / 8 - 100}px,0)`


const Bg = styled.div`
  background-color: ${color.bg};
  height: 100;
  `

const Container = styled.div`
  align-items: center;
  justify-content: center;
`

function Card() {
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 600, friction: 140 } }))
  return (
    <Bg>
    <Container  onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      <animated.div class="moonlight"  />
      <animated.div class="start" style={{ transform: props.xy.interpolate(trans2) }} />
    </Container>
    </Bg>
  )
}

export default Card;
