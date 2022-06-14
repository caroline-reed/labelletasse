// import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";


export const Header = styled.div`
  display: flex;
  position: fixed;
  justify-content: space-between;
  top: 0;
  width: 100%;
  /* height: 3.25vh; */
  z-index: 2;
  /* background-color: rgba(81, 48, 25); */
  /* background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)); */
`;


export const NavMenu = styled.div`
  z-index: 1;
  padding: 0.4rem 0.75rem 0.2rem 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  font-weight: bold;
  /* margin-right: -24px; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;


export const NavLink = styled(Link)`
  color: snow;
  font-family: sans-serif;
  font-size: 150%;
  /* text-shadow: 0.1rem 0.1rem 0.2rem black; */
  filter: drop-shadow(0.1rem 0.1rem 0.1rem black);
  display: block;
  /* align-items: center; */
  font-weight: bold;
  text-decoration: none;
  padding: 0 0 0 1.5rem;
  height: 100%;
  z-index: 1;
  cursor: pointer;
  &.active {
    color: rgba(232, 186, 140);
    filter: drop-shadow(0.1rem 0.1rem 0.1rem black);

  }
`;

export const CauseNav = styled(Link)`
color: snow;
text-shadow: 0.1rem 0.1rem 0.1rem black;
font-size: 115%;
display: block;
text-decoration: none;
padding: 0.2rem 0 0.2rem 0.5rem;
height: 100%;
z-index: 1;
cursor: pointer;
&.active {
  color: rgba(232, 186, 140);
  text-shadow: 0.1rem 0.1rem 0.2rem black;
}
`;

// export const Bars = styled(faBars)`
//   display: none;
//   color: steelblue;
//   @media screen and (max-width: 768px) {
//     display: block;
//     position: absolute;
//     top: 0;
//     right: 0;
//     transform: translate(-100%, 75%);
//     font-size: 1.5rem;
//     cursor: pointer;
//   }
// `;


// export const Blog = styled.a`
//   color: white;
//   display: flex;
//   align-items: center;
//   font-weight: bold;
//   text-decoration: none;
//   padding: 0 1rem;
//   height: 100%;
//   cursor: pointer;
//   &.active {
//     color: orange;
// `;
