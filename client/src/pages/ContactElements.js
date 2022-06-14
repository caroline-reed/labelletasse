import styled from "styled-components";
// import { NavLink as CLink } from "react-router-dom";


export const Form = styled.form`
  position: relative;
  width: 95%;
  margin: 0 auto 0 0;
  padding: 2% 0;
  z-index: 1;
`;

export const Field = styled.div`
  position: relative;
  padding: 2% 0;
  z-index: 1;
  `;

export const Label = styled.label`
  position: relative;
  padding: 1% 0 2%;
  z-index: 1;
`;

export const Input = styled.input`
  position: relative;
  font-family: sans-serif;
  font-size: 110%;
  width: 75%;
  height: auto;
  margin: 0 auto;
  z-index: 1;
`;

export const MessageInput = styled.textarea`
  position: relative;
  overflow: scroll;
  font-family: sans-serif;
  font-size: 110%;
  width: 75%;
  height: 8rem;
  z-index: 1;
`;


export const Button = styled.button`
  position: relative;
  display: block;
  font-size: 100%;
  z-index: 1;
`;
