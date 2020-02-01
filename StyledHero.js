import styled from "styled-components";
import defaultImg from "../images/home1.jpg";
const StyledHero = styled.header`
  min-height: 60vh;
  /* background: url(${defaultImg}); */
  background: url(${props => (props.img ? props.img : defaultImg)});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledHero;
