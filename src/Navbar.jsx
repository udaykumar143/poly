import React from "react";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Button,
  Stack,Row,Col,
} from "react-bootstrap";
import "./Navbar.css";
import SearchBar from "./Pages/Components/SearchBar.jsx";

const MyNavbar = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-teritary navbar-custom">
        {/* this is the mani  container for the navbar */}
        <Container>
          {/* Navbar.brand is place for the logo */}
          <Navbar.Brand href="/" className="navbar-brand-custom">
            {" "}
            Feel the vibe
          </Navbar.Brand>
          <SearchBar onSearch={("onSearch")}/>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {/* this navlink custom styling in navbar.css file  */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto ">
              <Nav.Link href="/" className="nav-link-custom">
                Home
              </Nav.Link>
              <Nav.Link href="/about" className="nav-link-custom">
                About
              </Nav.Link>
              <Nav.Link href="/services" className="nav-link-custom">
                Services
              </Nav.Link>
              <Nav.Link href="/contact" className="nav-link-custom">
                Contact
              </Nav.Link>
              <NavDropdown
                title="More"
                id="basic-nav-dropdown"
                className="nav-link-custom"
                z>
                <NavDropdown.Item href="/blog" className="dropdown-item-custom">
                  Blog
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/portfolio"
                  className="dropdown-item-custom">
                  Portfolio
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/faq" className="dropdown-item-custom">
                  FAQ
                </NavDropdown.Item>
              </NavDropdown>
              <Stack direction="horizontal" gap={3}>
                <Button variant="primary">Login</Button>
                <Button variant="secondary"> Signup</Button>
              </Stack>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Categories Section as a separate row below the navbar */}
      <div className="categories-section">
        <Container>
          <Row className="justify-content-center">
            <Col xs="auto">
              <Nav.Link href="/category/poultry" className="category-link">
                Poultry
              </Nav.Link>
            </Col>
            <Col xs="auto">
              <Nav.Link href="/category/men" className="category-link">
                Men
              </Nav.Link>
            </Col>
            <Col xs="auto">
              <Nav.Link href="/category/women" className="category-link">
                Women
              </Nav.Link>
            </Col>
            <Col xs="auto">
              <Nav.Link href="/category/electronics" className="category-link">
                Electronics
              </Nav.Link>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default MyNavbar;
