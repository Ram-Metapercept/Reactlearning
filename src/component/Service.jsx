
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Image from 'react-bootstrap/Image'
import Button from "react-bootstrap/Button"
import React from 'react'

function Service() {
  return (
    < >
    <Container id="service">
      <h1 className=' section-title text-center'>OUR SERVICES</h1>
      <hr className='my-custom-hr'/>
      <p className='text-muted mt-4 text-center'>We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have meaning and add a value for our clients.</p>

      <Row  className='mt-5'>

        <Col lg={4} className="mt-4" > <Col>
        <i class="pe-7s-diamond text-primary"></i></Col>
        <Col></Col></Col>
        <Col lg={4}  >B </Col>
        <Col lg={4}  >C </Col>
        <Col lg={4}  >D </Col>

        <Col lg={4}  > E</Col>
        <Col lg={4}  > </Col>
        <Col lg={4}  > </Col>
        <Col lg={4}  > </Col>

        <Col lg={4}  > </Col>
        <Col lg={4}  > </Col>
        <Col lg={4}  > </Col>
        <Col lg={4}  > </Col>
        

      </Row>




    </Container>
    
    
    <div id="home" className='section-feature'>

<Container fluid className="bg-image1 pt-5 text-white text-center">
<Container className='justify-content-center align-item-center'>
<Container fluid justify-content-center>
  <Row>
    <Col  className="text-white text-center">
      <h1 className="">Build your dream website today</h1>
      <p  className="form-secondary pb-4 text-muted"> <b> But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her.</b></p>
    
      <Button variant="light">View Plan and Pricing</Button>{' '}
      
    </Col>
  </Row>
</Container>


  </Container>

</Container>


</div>
    
    
    </>
  )
}

export default Service