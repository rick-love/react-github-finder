import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const name = 'rick';
    return (
      <div className='App'>
        <h1>Hallo {name}</h1>
      </div>
    );
  
  }
}

export default App;
