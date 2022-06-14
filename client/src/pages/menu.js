import React from "react";
import "./index.css";
import CafeOrderInput from '../components/CafeOrderInput';
import { drinkMenuOptions } from '../menudata';
import { foodMenuOptions } from '../menudata';

// import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas);

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderWindow: 'none',
      menuWindow: 'block',
      openOrderButton: 'block',
    }
  }

  openCafeOrder = () => {
    this.setState({
      orderWindow: 'block',
      menuWindow: 'none',
      openOrderButton: 'none',
    })
  }

  closeCafeOrder = () => {
    this.setState({
      orderWindow: 'none',
      menuWindow: 'block',
      openOrderButton: 'block',
    })
  }

  render() {
    return (
      <div className="main">
        <section id="menu" className="container">
          <div id="menuTitle">
            <h1>menu</h1>

            <div style={{display: this.state.openOrderButton}} id="cafeOrderToggle">
              <button onClick={this.openCafeOrder}>order online</button>
            </div>
          </div>

          <section id="menuBody">
            <div id="menuByline">
              <h3>all drinks available hot or iced</h3>
            </div>

            <div style={{display: this.state.orderWindow}} id="cafeOrder">
              <CafeOrderInput />
              <button id="cancelCafeOrder" onClick={this.closeCafeOrder}>Cancel</button>
            </div>

            <div style={{display: this.state.menuWindow}} className="container" id="menuList">
              <div id="coffeeSizes">
                <h4 className="menuHeading">coffee</h4>
                <h4 id="drinkSizes">regular | large</h4>
              </div>
              <table>
                <tbody>
                  <tr>
                    <td>coffee</td>
                    <td>$1.79 | $1.99</td>
                  </tr>
                  <tr>
                    <td>espresso</td>
                    <td>$1.49 | $2.49</td>
                  </tr>
                  <tr>
                    <td>latt&eacute;</td>
                    <td>$2.79 | $3.29</td>
                  </tr>
                  <tr>
                    <td>cappuccino</td>
                    <td>$2.79 | $3.29</td>
                  </tr>
                  <tr>
                    <td>macchiato</td>
                    <td>$2.79 | $3.29</td>
                  </tr>
                  <tr>
                    <td>americano</td>
                    <td>$2.49 | $2.99</td>
                  </tr>
                </tbody>
              </table>

              <h4 className="menuHeading">tea & more</h4>
              <table>
                <tbody>
                  <tr>
                    <td>tea</td>
                    <td>$1.79 | $1.99</td>
                  </tr>

                  <tr>
                    <td>hot chocolate</td>
                    <td>$1.99 | $2.29</td>
                  </tr>

                  <tr>
                    <td>milk</td>
                    <td>$1.49 | $1.79</td>
                  </tr>
                </tbody>
              </table>

              <h4 className="menuHeading">bakery</h4>
              <table>
                <tbody>
                  <tr>
                    <td>cookie</td>
                    <td>$1.99</td>
                  </tr>

                  <tr>
                    <td>brownie</td>
                    <td>$1.99</td>
                  </tr>

                  <tr>
                    <td>danish</td>
                    <td>$2.49</td>
                  </tr>

                  <tr>
                    <td>croissant</td>
                    <td>$2.49</td>
                  </tr>

                  <tr>
                    <td>coffee cake</td>
                    <td>$2.49</td>
                  </tr>

                </tbody>
              </table>

              <h4 className="menuHeading">meals</h4>
              <table>
                <tbody>
                  <tr>
                    <td>egg sandwich</td>
                    <td>$4.49</td>
                  </tr>

                  <tr>
                    <td>bagel & spread</td>
                    <td>$3.49</td>
                  </tr>

                  <tr>
                    <td>cereal (hot or cold)</td>
                    <td>$3.49</td>
                  </tr>

                  <tr>
                    <td>veggie wrap</td>
                    <td>$4.99</td>
                  </tr>
                </tbody>
              </table>

              <h4 className="menuHeading">grown folks</h4>
              <table>
                <tbody>
                  <tr>
                    <td>wine</td>
                    <td>glass: $4.99 | bottle: $15.99</td>
                  </tr>

                  <tr>
                    <td>beer</td>
                    <td>domestic: $2.99 | local & imported: $3.99</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </section>
      </div>
    );
  }
}

export default Menu;
