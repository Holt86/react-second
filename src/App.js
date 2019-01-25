import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile.jsx';
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
