import React from "react";
import {Anchor, Copyright, Footbar, ImgAnchor, ImgCreds, Social} from "./FooterElements.js";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas);

const Footer = () => {
  return (
    <>
      <Footbar>
        <ImgCreds><ImgAnchor href="#">credits</ImgAnchor></ImgCreds>
        <Copyright>&copy;2022 Caroline Reed | modest caf&eacute;</Copyright>

        <Social>
          <Anchor href="">
            <FontAwesomeIcon icon={["fab", "twitter"]} /></Anchor>
          <Anchor href="">
            <FontAwesomeIcon icon={["fab", "instagram"]} /></Anchor>
          <Anchor href="https://twitter.com/">
            <FontAwesomeIcon icon={["fab", "facebook"]} /></Anchor>
          <Anchor href="">
            <FontAwesomeIcon icon={["fab", "tiktok"]} /></Anchor>
          <Anchor href="">
            <FontAwesomeIcon icon={["fab", "spotify"]} /></Anchor>
          <Anchor href="">
            <FontAwesomeIcon icon={["fab", "soundcloud"]} /></Anchor>
          <Anchor href="mailto:reedce9@gmail.com?subject=Hello!">
            <FontAwesomeIcon icon={["fas", "envelope"]} /></Anchor>
        </Social>
      </Footbar>
    </>
  );
};

export default Footer;
