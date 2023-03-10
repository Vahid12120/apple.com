import { Button } from '@mui/material';
import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
 
export default class PaymentForm extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  };
 
  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }
  
  handleInputChange = (e) => {
    const { name, value } = e.target;
    
    this.setState({ [name]: value });
  }
  
  render() {
    const cartCleaner = () => {
        localStorage.removeItem("cart");
    }
    return (
      <div id="PaymentForm">
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <form>
        	<input
            type="tel"
            name="number"
            placeholder="Card Number"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          
          <input
            type="tel"
            name="name"
            placeholder="Name"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          
          <input
            type="tel"
            name="expiry"
            placeholder="Expiry"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          
          <input
            type="tel"
            name="cvc"
            placeholder="CVC"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <Button onClick={()=>cartCleaner()} sx={{height: "20px"}} variant="contained">Contained</Button>
        </form>
      </div>
    );
  }
}