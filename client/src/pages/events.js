import React from "react";
import "./index.css";

import { NavLink } from "react-router-dom";

import eventVid from "./images/singer1.mp4";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas);

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="main">
        <section id="eventBody">

          <section id="events" className="container">
            <h1>events</h1>

            <div id="eventOrder">
              <NavLink id="ticketLink" to="/tickets">tickets</NavLink>
            </div>

            <section id="eventCalendar">
              <h3>june</h3>
              <div className="container" id="eventCalGrid">
                <div className="weekday">su</div>
                <div className="weekday">m</div>
                <div className="weekday">t</div>
                <div className="weekday">w</div>
                <div className="weekday">th</div>
                <div className="weekday">f</div>
                <div className="weekday">sa</div>

                <div className="gridItem">
                </div>

                <div className="gridItem">
                </div>

                <div className="gridItem">
                </div>

                <div className="calItem">
                  <h6>1</h6>
                </div>

                <div className="calItem">
                  <h6>2</h6>
                  <NavLink to="/poetry">
                    Poetry Slam
                  </NavLink>
                </div>

                <div className="calItem">
                  <h6>3</h6>
                </div>

                <div className="calItem">
                  <h6>4</h6>
                  <NavLink to="/improv">
                    Improv
                  </NavLink>
                </div>

                <div className="calItem">
                  <h6>5</h6>
                  <NavLink to="/music">
                    Serena & the Thunder
                  </NavLink>
                </div>

                <div className="calItem">
                  <h6>6</h6>
                </div>

                <div className="calItem">
                  <h6>7</h6>
                </div>

                <div className="calItem">
                  <h6>8</h6>
                </div>

                <div className="calItem">
                  <h6>9</h6>
                  <NavLink to="/poetry">
                    Poetry Slam
                  </NavLink>
                </div>

                <div className="calItem">
                  <h6>10</h6>
                </div>

                <div className="calItem">
                  <h6>11</h6>
                  <NavLink to="/improv">
                    Improv
                  </NavLink>
                </div>

                <div className="calItem">
                  <h6>12</h6>
                  <NavLink to="/music">
                    Five Twine
                  </NavLink>
                </div>

                <div className="calItem">
                  <h6>13</h6>
                </div>

                <div className="calItem">
                  <h6>14</h6>
                </div>

                <div className="calItem">
                  <h6>15</h6>
                </div>

                <div className="calItem">
                  <h6>16</h6>
                  <NavLink to="/poetry">
                    Poetry Slam
                  </NavLink>
                </div>

                <div className="calItem">
                  <h6>17</h6>
                </div>

                <div className="calItem">
                  <h6>18</h6>
                  <NavLink to="/improv">
                    Improv
                  </NavLink>
                </div>

                <div className="calItem">
                  <h6>19</h6>
                  <NavLink to="/music">
                    Evelyn Grand
                  </NavLink>
                </div>

                <div className="calItem">
                  <h6>20</h6>
                </div>

                <div className="calItem">
                  <h6>21</h6>
                </div>

                <div className="calItem">
                  <h6>22</h6>
                </div>

                <div className="calItem">
                  <h6>23</h6>
                  <NavLink to="/poetry">
                    Poetry Slam
                  </NavLink>
                </div>

                <div className="calItem">
                  <h6>24</h6>
                </div>

                <div className="calItem">
                  <h6>25</h6>
                  <NavLink to="/improv">
                    Improv
                  </NavLink>
                </div>

                <div className="calItem">
                  <h6>26</h6>
                  <NavLink to="/music">
                    Open Mic Night
                  </NavLink>
                </div>

                <div className="calItem">
                  <h6>27</h6>
                </div>

                <div className="calItem">
                  <h6>28</h6>
                </div>

                <div className="calItem">
                  <h6>29</h6>
                </div>

                <div className="calItem">
                  <h6>30</h6>
                </div>

                <div className="gridItem">
                </div>

                <div className="gridItem">
                </div>
              </div>
            </section>
          </section>
        </section>
      </div>
    );
  }
}

export default Events;
