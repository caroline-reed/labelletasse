import styled from "styled-components";

export const Footbar = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  /* background-color: rgba(81, 48, 25, 1.0); */
  /* background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)); */
`;


export const Copyright = styled.p`
  display: flex;
  color: rgba(252, 206, 160, 1.0);
  margin: 0 0 0 15%;
  font-size: 95%;
  font-weight: normal;
  /* padding: 0.4rem 0 0.2rem 1rem; */
  z-index: 1;
`;


export const ImgCreds = styled.p`
  display: flex;
  font-size: 100%;
  padding: 0.2rem 0 0.2rem 0.5rem;
  z-index: 1;
`;


export const Social = styled.div`
  z-index: 12;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: auto;
  padding: 0.2rem 0.75rem 0.2rem 0;
  z-index: 1;
`;

export const ImgAnchor = styled.a`
  color: rgba(212, 166, 120, 1.0);
  display: flex;
  align-items: center;
  font-weight: normal;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
  z-index: 1;
`;


export const Anchor = styled.a`
  color: rgba(81, 48, 25, 1.0);
  display: flex;
  align-items: center;
  font-size: 125%;
  font-weight: bold;
  text-decoration: none;
  margin: 0 0rem 0 1.5rem;
  height: 100%;
  cursor: pointer;
  z-index: 1;
`;
