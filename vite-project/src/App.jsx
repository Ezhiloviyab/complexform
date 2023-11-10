
import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import { Container,Nav,NavDropdown,Navbar } from 'react-bootstrap';
import Home from './Home';

const App = () => {
  return (
    <>
     <Navbar expand="lg" className="navigate">
      <Container>
        <Navbar.Brand className='brand'><img src="https://static.wixstatic.com/media/3a0de9_cf6bb4f2ae6b4c6487552047e8a3e676~mv2.webp"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navb me-auto">
            <Nav.Link  className='nav mx-3' href="/">Home</Nav.Link>
            <Nav.Link className='nav mx-3' href="#link">Services</Nav.Link>
            <NavDropdown title="Careers" id="basic-nav-dropdown">
              <NavDropdown.Item href="/step-one">Apply now</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
             
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Nav>
          <button className='btn-login'>Login</button>
        </Nav>
      </Container>
    </Navbar>
    <Router>
      <Routes>
        <Route path="/step-one" element={<StepOne />} />
        <Route path="/" element={<Home />} />
        <Route path="/step-two" element={<StepTwo />} />
        <Route path="/step-three" element={<StepThree />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;
