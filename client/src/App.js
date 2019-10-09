import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './Todos';
import AddTodo from './AddTodo';
import Home from './components/Home';
import { BrowserRouter, Route } from 'react-router-dom';
import Contact from './components/Contact';
import About from './components/About';
import Navbar from './components/Navbar';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario kart'}
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    });
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path= '/' component= {Home} />
          <Route path= '/About' component= {About} />
          <Route path= '/Contact' component= {Contact} />
          <h1 className="center blue-text">Todo's</h1>
          <Todos todos={this.state.todos} deleteTodo = {this.deleteTodo}/>
          <AddTodo addTodo={this.addTodo}/>
        </div>
      </BrowserRouter>
    );
  }
  
}

export default App;
