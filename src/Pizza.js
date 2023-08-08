/* eslint-disable */
import React from 'react';
import pizza from './assets/pizza.png';

const Counter = {
  fontSize: '82px',
  backgroundColor: 'black',
  borderRadius: '20px',
};

const Button = {
  fontSize: '28px',
  padding: '10px',
  backgroundColor: 'white',
  borderRadius: '10px',
};

class Pizza extends React.Component {
  render() {
    return (
      <div>
        <img src={pizza} width="200" alt='Pizza Logo'/>
        <h1>Pizza Order Counter</h1>
        <h1 style={Counter}>0</h1>
        <button type='button' style={Button}>Take Order</button>
        <br />
        <br />
        <button type='button' style={Button}>Cancel Order</button>
      </div>
    );
  }
}

export default Pizza;
