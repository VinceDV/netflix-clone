import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function TextLinkExample() {
  return (
    <header className="sticky-top">
      <Navbar id="header" bg="dark" expand="lg">
        <Container className="m-2" fluid>
          <Link to={"/"}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
              alt="logo"
              width={150}
            />
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto ms-3 my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link className="text-light tvshows" to={"/"}>Home</Link>
              <Link className="text-light tvshows" to={"/tvShows"}>TV Shows</Link>
              <NavDropdown className="text-light" title="Genres" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Horror</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Comedy</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Fantasy</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-light">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default TextLinkExample;
