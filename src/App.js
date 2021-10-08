import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Books from './pages/books';
import Categories from './pages/categories';
import './App.css';

function App() {
  return (
    <div className="page_content">
      <div className="navigation">
        <div className="view_content">
          <Header />
        </div>
      </div>
      <Switch>
        <Route exact path="/">
          <div className="content_container">
            <div className="view_content">
              <Books />
            </div>
          </div>
        </Route>
        <Route path="/categories">
          <div className="content_container">
            <div className="view_content">
              <Categories />
            </div>
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
