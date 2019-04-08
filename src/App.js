import React, { Component } from 'react';
import { Route, BrowserRouter, Link, Switch } from 'react-router-dom';
import './App.css';
import Home from "./Home/Home"
import History from "./History/History"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <BrowserRouter>
        <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/notre-histoire" component={History} />
              </Switch>
            </BrowserRouter>
        </header>
      </div>
    );
  }
}

export default App;
