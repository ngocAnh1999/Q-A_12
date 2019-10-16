import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './Todos';
import AddTodo from './AddTodo';
import Home from './components/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Contact from './components/Contact';
import About from './components/About';
import Navbar from './components/Navbar';
import Post from './components/Post';
class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/About' component={About} />
            <Route path='/Contact' component={Contact} />

            <Route path='/posts/:post_id' component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
