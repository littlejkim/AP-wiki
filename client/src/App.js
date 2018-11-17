import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';

const Navigation = () => (
  <nav class="navbar">
    <div class="container">    
      <h1 class="logo"><a href="/home">Simple Navbar</a></h1>
      <ul class="nav nav-right">
        <li><a href="/home">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/  contact">Contact</a></li>
      </ul>
    </div>
  </nav>
);

const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/home' component={Home}></Route>
    <Route exact path='/about' component={About}></Route>
    <Route exact path='/contact' component={Contact}></Route>
  </Switch>
);

class App extends Component {
  // here is our UI
  // it is easy to understand their functions when you 
  // see them render into our screen
  render() {
    return (
      <div className='app'>
        <Navigation />
        <Main />
      </div>
    );

  }
}

export default App;
