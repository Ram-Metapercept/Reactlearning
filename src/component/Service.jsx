
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Image from 'react-bootstrap/Image'
import Button from "react-bootstrap/Button"
import React from 'react'
import { Nav } from 'react-bootstrap';

function Service() {
  return (
    < >
    <div id="service" className='mt-5'>
    <Container className='pt-5'>
      <h1 className=' section-title text-center'>OUR SERVICES</h1>
      <hr className='my-custom-hr'/>
      <p className='text-muted mt-4 text-center'>We craft digital,graphic and dimensional thinking, to create category leading brand experiences that have meaning and add a value for our clients.</p>

      <Row  className='mt-5'>

        <Col lg={4} className="mt-4 p-auto" > <i className="pe-7s-piggy text-primary"></i>
        <h4>Digital Design</h4>
        <p>Some quick example text to build on the card title and make up the bulk of the card's content. Moltin gives platform.</p>
      </Col>

        <Col lg={4} className="mt-4 p-auto"><h4>Unlimited Colors</h4>
        <p>Credibly brand standards compliant users without extensible services. Anibh euismod tincidunt laoreet Ipsum passage.</p>
        </Col>

        <Col lg={4} className="mt-4 p-auto" ><h4>Strategy Solutions</h4>
        <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, and large language ocean neary regelia.</p> </Col>
        
        <Col lg={4} className="mt-4 p-auto"><h4>Awesome Support</h4>
           <p>It is a paradisematic country, in which roasted parts of sentences fly into your mouth leave for the far World.</p></Col>

        <Col lg={4} className="mt-4 p-auto" ><h4>Truly Multipurpose</h4>
        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p> </Col>

        <Col lg={4} className="mt-4 p-auto"  > <h4>Easy to customize</h4>
        <p>Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia.</p></Col>

        <Col lg={4} className="mt-4 p-auto"><h4>Pixel Perfect Design</h4>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p> </Col>

        <Col lg={4} className="mt-4 p-auto" > <h4>Perfect Toolbox</h4>
        <p>Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.</p></Col>

        <Col lg={4} className="mt-4 p-auto" ><h4>Awesome Design</h4>
        <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p> </Col>


      </Row>




    </Container>
    
    
    <div id="home" className='section-feature mt-5'>
  <Container fluid className="bg-image1 pt-5 text-white text-center">
    <Container>
      <Row>
        <Col xs={12} sm={12} md={8} lg={8} xl={8} xxl={6} className="text-white text-center mx-auto">
          <h1 className="mt-0 p-auto">Build your dream website today</h1>
          <p className="form-secondary p-auto">
            <b>But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her.</b>
          </p>
          <Button className="mt-n1" variant="light"><a href="#" style={{ textDecoration: 'none', color:"black"}}>View Plan and Pricing</a> </Button>{' '}
        </Col>
      </Row>
    </Container>
  </Container>
</div>

    
</div>
    </>
  )
}

export default Service