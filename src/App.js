import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className='app-wrapper'>
                <header className='header'>
                    <img src='https://yandex.ru/collections/card/5b9b472acf25b67372ad7f20/'></img>
                </header>
                <nav className='nav'>
                    <div>Profile</div>
                </nav>
                <div className='content'>
                    Main Content
                </div>
            </div>
        );
    }
}

export default App;
