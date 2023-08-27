import React, { Component } from 'react';
import Products from './Products';
import Rating from './Rating';
import { Button } from 'react-bootstrap';
class App extends Component {

  render() {
    const isValid = true; // if true, button wont be disbaled

    return (
      <div>
        <h1>
          My First React app!
        </h1>
        {<Products />}
        <Button variant="danger" disabled={!isValid}>Click Here</Button>
        <Rating rating="1" />
        <Rating rating="2" />
        <Rating rating="3" />
        <Rating rating="4" />
        <Rating rating="5" />

      </div>
    );
  }
}
export default App;