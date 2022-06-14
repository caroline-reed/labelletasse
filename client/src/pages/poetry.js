import React from "react";
import "./index.css";

import { NavLink } from "react-router-dom";


import dailywordpic from "./images/dailyword.png";
import rider6pic from "./images/rider6.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas);

class Poetry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="main">
        <section id="myWork" className="container">
          <h2>Events Calendar</h2>

          <div className="container" id="eventCalGrid">
            <div className="calItem">
              <NavLink to="/poetry">
                Poetry Wednesdays
              </NavLink>
            </div>

            <div className="calItem">
              <NavLink to="/improv">
                Improv Night
              </NavLink>
            </div>

            <div className="calItem">
              <NavLink to="/music">
                Serena & the Thunder
              </NavLink>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Poetry;
