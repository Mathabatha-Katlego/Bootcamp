import React, { Component } from 'react';
import Products from './Products';
class App extends Component {
  formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  render() {
    const user = {
      firstName: 'Katlego',
      lastName: 'Mohlaloga'
    };
    return (
      <div>
        <h1>
          My First React app!
        </h1>
        { <Products />}
        
        {/* { <h1>Hello, {this.formatName(user)}</h1> } */}
      </div>
    );
  }
}
export default App;