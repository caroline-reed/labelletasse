import React from "react";
import "./index.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

// import resume from "./reedcResume.pdf";

library.add(fab, fas);

class Credits extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="main">
        <h2>Credits</h2>

        <section id="creditBody">
          <div className="creditItem">
            <p>Video by <a href="https://pixabay.com/users/ernest_roy-1284978/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=31383">
            Ernest_Roy</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=31383">Pixabay</a></p>
          </div>
        </section>
      </div>
     );
   }
}

export default Credits;
