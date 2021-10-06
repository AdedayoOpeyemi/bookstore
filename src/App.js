import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Books from './pages/books';
import Categories from './pages/categories';

// import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div>
        <Switch>
          <Route exact path="/">
            <Books />
          </Route>
          <Route path="/categories">
            <Categories />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
