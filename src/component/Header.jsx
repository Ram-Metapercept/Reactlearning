import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import '../App.css';


function Header() {
    return (
        <Navbar bg="light" expand="lg" justify-content-center className='navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark navbar-white'>
            <Container>
                <Navbar.Brand href="/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-amd" viewBox="0 0 16 16">
                    <path d="m.334 0 4.358 4.359h7.15v7.15l4.358 4.358V0H.334ZM.2 9.72l4.487-4.488v6.281h6.28L6.48 16H.2V9.72Z" />
                </svg>
                    <b className='pl-5'>HIRIC</b>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">

                        <Nav.Link href="/#">Home</Nav.Link>{"     "}
                        <Nav.Link href="/#feature">Feature</Nav.Link> {"     "}
                        <Nav.Link href="/#service">Service</Nav.Link>{"     "}
                        <Nav.Link href="/#about">About</Nav.Link>{"     "}
                        <Nav.Link href="/#pricing">Pricing</Nav.Link>{"    "}
                        <Nav.Link href="/#blog">Blog</Nav.Link>{"     "}
                        <Nav.Link href="/#contact">Contact</Nav.Link>{"      "}
                    </Nav>
                    <Button variant="success" className='btn-head'>Try it for Free</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
