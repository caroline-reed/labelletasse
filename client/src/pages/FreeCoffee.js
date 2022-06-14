import styled from "styled-components";
import { NavLink as CafLink } from "react-router-dom";


export const FreeCoffee = styled.div`
  position: fixed;
  top: 4.25vh;
  left: 1vh;
  width: 6rem;
  height: 6rem;
  /* text-align: center; */
  z-index: 1;
  border-radius: 50%;
  background-color: black;
`;

export const FreeCoffeeLink = styled(CafLink)`
  position: relative;
  display: block;
  top: 0;
  left: 0;
  padding: 1.25rem 1.25rem;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  color: white;
  font-size: 100%;
  font-weight: bold;
  z-index: 1;
`;
