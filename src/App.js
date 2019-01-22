import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Profile from './Components/Profile';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <Profile />
            </div>
        );
    }
}

export default App;
