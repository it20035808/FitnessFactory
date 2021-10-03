//Navigation bar/header component
import axios from "axios";
import React from "react";

import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "../styles/NavBar.css";

function NavBar() {

  const userLogOut = (e) => {

    axios.delete("http://localhost:8070/user/logout").then((res) => {
      console.log(res);
      window.location.href = "/";
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <div>
      <Navbar
        sticky="top"
        bg="dark"
        variant="dark"
        expand="lg"
        className="navBar"
      >
        <Container>
          <Navbar.Brand href="#home">FitnessFactory</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/homePage">Home</Nav.Link>

              <NavDropdown title="Events" id="basic-nav-dropdown">
                <NavDropdown.Item href="/events">Events</NavDropdown.Item>
                <NavDropdown.Item href="/trackerHome">Trackers</NavDropdown.Item>
                <NavDropdown.Item href="/summary">Summary</NavDropdown.Item>
              </NavDropdown>


              <NavDropdown title="Store" id="basic-nav-dropdown">
                <NavDropdown.Item href="/store">Store</NavDropdown.Item>
                <NavDropdown.Item href="/addProduct">Add Product</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Instructors" id="basic-nav-dropdown">
                <NavDropdown.Item href="/schedules">Schedules</NavDropdown.Item>
                <NavDropdown.Item href="/progReports">Progress Reports</NavDropdown.Item>
              </NavDropdown>
              
              <Nav.Link href="/manageUsers">Users</Nav.Link>

              <NavDropdown title="Suppliers" id="basic-nav-dropdown">
                <NavDropdown.Item href="/suppliers">Suppliers</NavDropdown.Item>
                <NavDropdown.Item href="/addSupplier">Add Suppliers</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="/inventory">Inventory</Nav.Link>

              <NavDropdown title="Financial" id="basic-nav-dropdown">
                <NavDropdown.Item href="/expenses">Expenses</NavDropdown.Item>
                <NavDropdown.Item href="/payments">Payments</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="/logout" onClick={userLogOut}>Log out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
