import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home'

function App() {
  return (
    <div>
      <div className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#home">React-Vanilla-Bootstrap</a>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <main>
            <Home />
          </main>
        </div>
      </div>
  </div>
  );
}

export default App;
