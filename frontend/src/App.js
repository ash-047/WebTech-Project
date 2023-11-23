import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import Login from "./Login";
import GuidelinesPage from "./Guidelines";
import AboutUs from "./About";
import BorrowedBooks from "./BorrowedBooks";
import ReservedBooksPage from "./ReservedBooks";
import MyProfile from "./MyProfile";
import './App.css'

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark" className="navigationbar">
            <Container>
              <Nav>
                <Nav.Link as={Link} to={"/MyProfile"}>
                  My Profile
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link as={Link} to={"/ReservedBooks"}>
                  Reserved Books
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link as={Link} to={"/BorrowedBooks"}>
                  Borrowed Books
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link as={Link} to={"/About"}>
                  About Us
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link as={Link} to={"/Guidelines"}>
                  Guidelines
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link as={Link} to={"/Login"}>
                  Login
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container id="imagecontainer">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/MyProfile" element={<MyProfile />} />
            <Route path="/BorrowedBooks" element={<BorrowedBooks />} />
            <Route path="/ReservedBooks" element={<ReservedBooksPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/guidelines" element={<GuidelinesPage />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
};

export default App;
