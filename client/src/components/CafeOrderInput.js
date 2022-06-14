import React from 'react';
import '../index.css';
import axios from 'axios';
import { components } from 'react-select';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { drinkMenuOptions } from '../menudata';
import { foodMenuOptions } from '../menudata';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fab, fas);

const animatedComponents = makeAnimated();


class CafeOrderInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: '',
      selectedItem: '',
      cartItems: [],
      subtotal: 0.00,
      tax: 0.00,
      total: 0.00,
      time: '',
      customerName: '',
      customerContact: '',
      instructions: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange = (selectedItem) => {
    this.setState(
      prevState => ({
        cartItems: [...this.state.cartItems, selectedItem],
        subtotal: this.state.subtotal + selectedItem.value[1]
      })
    );
    // this.setState({
    //   subtotal: this.state.subtotal + selectedItem.value[1]
    // })
  }

  editCart = () => {

  }

  clearCart = () => {
    this.setState({
      cartItems: [],
      subtotal: 0.00,
     });
  }
    // selectedItem.map((o) =>
    //   this.setState(
    //     prevState => ({
    //       displayItems: [...this.state.displayItems, ...selectedItem]
    //     })
    //   )
    // );



  handleCustomerInfo = (e) => {
    this.setState({
      customerName: e.target.value,
      customerContact: e.target.value,
      instructions: e.target.value,
    })
  }

  addCafeOrder = () => {

  };

  handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      _id: this.state._id,
      cartItems: this.state.items,
      subtotal: this.state.subtotal,
      tax: this.state.tax,
      total: this.total,
      time: this.state.time,
      customerName: this.state.customerName,
      customerContact: this.state.customerContact,
      instructions: this.state.instructions,
     };

    if (order.items && order.items.length > 0) {
      axios
        .post('/api/cafeorders', order)
        .then((res) => {
          if (res.data) {
            this.props.getOrder();
            this.setState({ cafeorder: {} });
          }
        })
        .catch((err) => console.log(err));
    } else {
      console.log('order fields are empty');
    }
  };

  render() {
    let { selectedItem } = this.state;
    return(
      <>
        <form id="cafeOrderForm">
          <div id="drinkMenu">
            <label htmlFor="drinks">Drinks</label>
            <Select
              closeMenuOnSelect={true}
              components={animatedComponents}
              value={this.selectedItem}
              onChange={this.handleChange}
              options={drinkMenuOptions}
            />
          </div>

          <div id="foodMenu">
            <label htmlFor="food">Food</label>
            <Select
              closeMenuOnSelect={true}
              components={animatedComponents}
              value={this.selectedItem}
              onChange={this.handleChange}
              options={foodMenuOptions}
            />
          </div>

          <div id="displayOrder">
            <h4>Selected Items:</h4>
            {this.state.cartItems.map(o => <p>{o.label}</p>)}
            <h5>Subtotal:</h5>
            <p>{this.state.subtotal}</p>
          </div>

          <div id="customerDetails" onChange={this.handleCustomerInfo}>
            <label htmlFor="customerName">name:</label>
            <input type="text" id="customerName" name="customerName" /><br />

            <label htmlFor="customerContact">email or phone:</label>
            <input type="text" id="customerContact" name="customerContact" /><br />

            <label htmlFor="instructions">special instructions:</label>
            <textarea id="instructions" name="instructions" /><br />
          </div>
          <button onClick={this.handleSubmit} type="submit" id="goToCheckout">Checkout</button>
          <button onClick={this.editCart} id="editOrder">Edit Cart</button>
          <button onClick={this.clearCart} id="clearOrder">Clear</button>
        </form>
      </>
    );
  };
}

export default CafeOrderInput;
