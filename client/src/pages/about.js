import React from "react";
import "./index.css";
import aboutvid from "./images/baristaF.mp4";

import ContactForm from "./ContactForm";

import { FreeCoffee, FreeCoffeeLink } from "./FreeCoffee";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

// import resume from "./reedcResume.pdf";

library.add(fab, fas);

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="main">
        <section className="container" id="aboutUs">
          <h1>about us</h1>
          <FreeCoffee>
            <FreeCoffeeLink to="/cause">Get<br />Free<br />Coffee</FreeCoffeeLink>
          </FreeCoffee>

          <section id="aboutInfo">
            <div id="bio">
              <h3>our story</h3>
              <p>Company history</p>
            </div>

            <div id="contactUs">
              <h3>contact</h3>
              <div id="contactInfo">
                <table>
                  <tbody>
                    <tr>
                      <td><FontAwesomeIcon icon="map-marker-alt" /></td>
                      <td>1234 Cherry Lane<br />Yourtown, Yourstate, USA 56789</td>
                    </tr>

                    <tr>
                      <td><FontAwesomeIcon icon="phone" /></td>
                      <td>+1 (234) 567-9801</td>
                    </tr>

                    <tr>
                      <td><FontAwesomeIcon icon="envelope" /></td>
                      <td>questions@belletasse.com</td>
                    </tr>
                  </tbody>
                </table>

                <div id="social">
                  <a href="">
                    <FontAwesomeIcon icon={["fab", "twitter"]} /></a>
                  <a href="">
                    <FontAwesomeIcon icon={["fab", "instagram"]} /></a>
                  <a href="https://twitter.com/">
                    <FontAwesomeIcon icon={["fab", "facebook"]} /></a>
                  <a href="">
                    <FontAwesomeIcon icon={["fab", "tiktok"]} /></a>
                  <a href="">
                    <FontAwesomeIcon icon={["fab", "spotify"]} /></a>
                  <a href="">
                    <FontAwesomeIcon icon={["fab", "soundcloud"]} /></a>
                </div>
              </div>

              <div id="hours">
                <h4>hours</h4>
                <table>
                  <tbody>
                    <tr>
                      <td>Sunday-Wednesday:</td>
                      <td>5am-9pm</td>
                    </tr>

                    <tr>
                      <td>Thursday-Saturday:</td>
                      <td>5am-1am</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div id="writeUs">
                <h4>write to us:</h4>
                <ContactForm />
              </div>
            </div>
          </section>
        </section>
      </div>
     );
   }
}

export default About;
