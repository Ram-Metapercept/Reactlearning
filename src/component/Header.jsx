import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
function BasicExample() {
    return (
        <Navbar bg="light" expand="lg" justify-content-center>
            <Container>
                <Navbar.Brand href="/">
                    <b>HIRIC</b>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                   
                        <Nav.Link href="/">Home</Nav.Link>{"     "}
                        <Nav.Link href="/feature">Feature</Nav.Link> {"     "}
                        <Nav.Link href="/service">Service</Nav.Link>{"     "}
                        <Nav.Link href="/about">About</Nav.Link>{"     "}
                        <Nav.Link href="/pricing">Pricing</Nav.Link>{"    "}
                        <Nav.Link href="/blog">Blog</Nav.Link>{"     "}
                        <Nav.Link href="/contact">Contact</Nav.Link>{"      "}




             
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;
