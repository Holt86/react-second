import React, { Component } from 'react';
import Header from './Components/Header'
import Technologies from './Components/Technologies'
import Footer from './Components/Footer'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Technologies />
        <Footer />
      </div>
    );
  }
}

export default App;
