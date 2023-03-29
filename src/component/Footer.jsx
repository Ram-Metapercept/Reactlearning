import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


import React from 'react'

function Footer() {
  return (
    <div>
        <Container fluid className='footer-section'>
            <Row >
                <Col lg={1}  className="mx-auto text-white ml-5 mb-5 ">
                    <h4>HIRIC</h4>
                    <Row className='mx-auto text-muted mt-4'>
                    <Row  >Home</Row>
                    <Row>About us</Row>
                    <Row>Careers</Row>
                    <Row> Contact us</Row>
                    </Row>
                </Col>
                <Col lg={1} className="mx-auto text-white ml-auto">
                    <h4>Information</h4>
                    <Row className='mx-auto text-muted mt-4'>
                    <Row  >Terms </Row>
                    <Row>About us</Row>
                    <Row>jobs</Row>
                    <Row>BookMarks</Row>
                    </Row>
                </Col>
                <Col lg={1} className="mx-auto text-white ml-auto">
                    <h4>Support</h4>
                    <Row className='mx-auto text-muted mt-4'>
                    <Row  >FAQ</Row>
                    <Row>Contact us</Row>
                    <Row>Discussion</Row>
              
                    </Row>
                </Col>
                <Col lg={2} className="mx-auto text-white ml-auto mt-4">
                    <h4>Subscribe</h4>
                    <Row className='mx-auto text-muted'>
                    In an ideal world this text wouldn’t exist, a client would acknowledge the importance of having web copy before the design starts.

                    <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
        
        <InputGroup>
          
          <Form.Control
            type="email"
            placeholder="email"
            aria-label="email"
            aria-describedby="btnGroupAddon"
            className='buttonGroup'
          />
          <InputGroup.Text id="btnGroupAddon">@</InputGroup.Text>
        </InputGroup>
      </ButtonToolbar>

                    </Row>
                </Col>
            </Row>
            

        </Container>

        <Container fluid className='buttonGroup '> 
        <Row className='py-3 ml-5' ><Col className='ml-5'> 2023@Metapercept</Col>
           </Row></Container>
    </div>
  )
}

export default Footer