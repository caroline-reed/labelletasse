import React from "react";
// import "./index.css";
import { Main, Vid, HomeTitle, H1, Cause, CauseLink } from "./HomeElements.js";
import bkvid from "./images/espresso5.mp4";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas);

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <Main>
        <section id="home" className="container">
          <Vid loop muted autoPlay>
            <source
              src={bkvid}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </Vid>

          <HomeTitle>
            <H1>la Belle Tasse</H1>
          </HomeTitle>
        </section>
      </Main>
    );
  }
}

export default Home;
