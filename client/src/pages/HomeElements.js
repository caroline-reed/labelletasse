import styled from "styled-components";
import { NavLink as CLink } from "react-router-dom";


export const Main = styled.div`
  position: relative;
  /* background-color: rgba(61, 28, 5, 1.0); */
  background-color: black;
  min-width: 100vw;
  width: 100%;
  height: 100%;
`;

export const Vid = styled.video`
  position: relative;
  filter: sepia(50%) saturate(120%) brightness(140%) contrast(130%) opacity(75%) hue-rotate(0deg);
  z-index: 0;
  min-width: 100vw;
  width: 100%;
  height: 100%;
`;

export const HomeTitle = styled.div`
  position: fixed;
  width: 100%;
  top: 82.5vh;
  left: 65vw;
  z-index: 1;
`;

export const H1 = styled.h1`
  position: absolute;
  font-family: sans-serif;
  font-size: 430%;
  font-weight: normal;
  text-shadow: 0.1rem 0.1rem 0.1rem black;
  color: snow;
  z-index: 2;
`;

export const ModLogo = styled.div`
  position: absolute;
  top: 1.25vh;
  width: 4.75rem;
  height: 4.75rem;
  background-color: beige;
  border: thin inset beige;
  border-radius: 50%;
  z-index: 1;
`;

export const Cause = styled.div`
  position: fixed;
  top: 5vh;
  left: 1vh;
  width: 6.5rem;
  height: 6.5rem;
  color: white;
  font-size: 125%;
  font-weight: bold;
  text-align: center;
  z-index: 1;
  border-radius: 50%;
  background-color: black;
`;

export const CauseLink = styled(CLink)`
  position: relative;
  display: block;
  top: 0;
  left: 0;
  padding: 3vh 0 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  color: white;
  font-size: 100%;
  font-weight: bold;
  z-index: 1;
`;
