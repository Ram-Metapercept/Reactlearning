// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button';
// import {Link} from "react-router-dom"
// import { HashLink } from "react-router-hash-link";

// function BasicExample() {
//   return (
//     <Navbar bg="light" expand="lg">
//       <Container >
//       <i class="mdi mdi-alien"></i>
//         <Navbar.Brand href="/"><b>HIRIC</b></Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto pl-34">
//            <Link to="/">Home</Link>
//            <Link to="/feature">Feature</Link>
//            <Link to="/service">Service</Link>
//            <Link to="/about">About</Link>
//            <Link to="/pricing">Pricing</Link>

//            <Link to="/blog">Blog</Link>
//            <Link to="/contact">Contact</Link>
         
//            <Button variant="success"> try it for free</Button>

//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default BasicExample;


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
                        {/* <Link to="/">Home</Link>
            <Link to="/feature">Feature</Link>
            <Link to="/service">Service</Link>
            <Link to="/about">About</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link> */}
                        <Nav.Link href="/">Home</Nav.Link>{"     "}
                        <Nav.Link href="/feature">Feature</Nav.Link> {"     "}
                        <Nav.Link href="/service">Service</Nav.Link>{"     "}
                        <Nav.Link href="/about">About</Nav.Link>{"     "}
                        <Nav.Link href="/pricing">Pricing</Nav.Link>{"    "}
                        <Nav.Link href="/blog">Blog</Nav.Link>{"     "}
                        <Nav.Link href="/contact">Contact</Nav.Link>{"      "}

                         {/* <HashLink to={"/#home"}>Home</HashLink>
//             <HashLink to={"/#feature"}>Feature</HashLink> {"     "}
//             <HashLink to={"/#service"}>Service</HashLink>{"     "}
//             <HashLink to={"/#about"}>About</HashLink>{"     "}
//             <HashLink to={"/#pricing"}>Pricing</HashLink>{"    "}
//             <HashLink to={"/#blog"}>Blog</HashLink>{"     "}
//             <HashLink to={"/#contact"}>Contact</HashLink>{"      "} */}
                        <Button variant="success">Try it for free</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;
