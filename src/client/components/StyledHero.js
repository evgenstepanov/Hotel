import styled from 'styled-components';
import defaultImg from '../img/default-hero.jpg';

const StyledHero = styled.header`
  min-height: 60vh;
  background: url(${(props) => props.image || defaultImg}) center/cover
    no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &:after {
    content: '';
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    z-index: 0;
  }
`;

export default StyledHero;
