import styled from 'styled-components'
import fontsize from './FontSize'
import color from './Color'

export const Hello = styled.p`
  font-size: ${fontsize.hello};
  color: ${color.font};
  line-height:0px;  
  text-align: right;
`

export const Title = styled.p`
  font-size: ${fontsize.title};
  color: ${color.font};
  line-height:0px;  
`

export const Subtitle = styled.p`
  font-size: ${fontsize.subtitle};
  color: ${color.font};
  line-height:0px;  
`