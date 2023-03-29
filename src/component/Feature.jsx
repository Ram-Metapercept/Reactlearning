import React from 'react'
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Image from 'react-bootstrap/Image'
import Button from "react-bootstrap/Button"
import '../App.css';
function Feature() {
  return (
    <>
    <Container id="feature" className='section-feature'>

      <Row>
        <Col>
        <h1>A digital web design studio creating modern & engaging online</h1>
        <p className='text-muted font-secondary '>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
        <ul className='text-muted font-secondary'>
          <li>We put a lot of effort in design.</li>
          <li>The most important ingredient of successful website.</li>
          <li>Submit Your Orgnization.</li>
        </ul>
        </Col>
        <Col> <Image  width={500}
        height={359}
        alt="171x180" src='https://tinyurl.com/4u2twya3'
        className='img-fluid'></Image></Col>

      
      </Row>
      <Button variant="success"  style={{ width: '150px' }}> Learn More</Button>
    </Container>
    
    
    
    
    
    </>
  )
}

export default Feature