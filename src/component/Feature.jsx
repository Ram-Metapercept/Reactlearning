import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import '../App.css';
import { ArrowRight } from 'react-bootstrap-icons';

function Feature() {
  return (
    <div className="home2" id="feature">
    <Container  className='section-feature'>
      <Row className='align-items-center'>
        <Col md={6}>
          <h1>A digital web design studio creating modern & engaging online</h1>
          <p className='text-muted font-secondary '>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          <ul className='text-muted font-secondary'>
            <li>We put a lot of effort in design.</li>
            <li>The most important ingredient of successful website.</li>
            <li>Submit Your Orgnization.</li>
          </ul>
          <Button variant="success" style={{ width: '150px' }}><a href="#" style={{ textDecoration: 'none', color:"white"}}>Learn More <ArrowRight/></a>  </Button>
        </Col>
        <Col md={6} className='text-center'>
          <Image src='https://tinyurl.com/4u2twya3' fluid alt='171x180' />
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Feature;
