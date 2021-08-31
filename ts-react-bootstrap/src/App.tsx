import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import NavBar from 'react-bootstrap/NavBar'
import Navbar from 'react-bootstrap/Navbar'
import Home from './Home'

function App() {
  const ret = (
    <div>
      <NavBar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      </NavBar>
      <Container fluid>
        <Row>
          <main>
            <Home />
          </main>
        </Row>
      </Container>
    </div>
  );
  // let ret = <Container fluid><Home/></Container>
  return ret
}

export default App;
