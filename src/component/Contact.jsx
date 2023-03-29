import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import { Button } from 'react-bootstrap';
import '../App.css';

function FormFloatingCustom() {
  return (
    <>
    <Container id="contact" >
<h1 className='text-center'>GET IN TOUCH</h1>
<hr className='my-custom-hr'/>
<p className='text-muted text-center pt-4 font-secondary'>We thrive when coming up with innovative ideas but also understand that a smart concept should be supported with faucibus sapien odio measurable results.</p>
<Container >
<Row className='mt-4 pt-4 '>
  
  <Col sm={4} ><p><b> Office Address 1:</b></p>
<p className='text-muted'>4461 Cedar Street Moro, AR 72368</p>
<Row>
<Col><p><b> Office Address 2:</b></p></Col>
<p className='text-muted'>2467 Swick Hill Street
New Orleans, LA 70171</p>
</Row>
<Row>
<Col><p><b>
  Working Hours:</b></p></Col>
<p className='text-muted'>9:00AM To 6:00PM</p>

</Row>
</Col>


<Col sm={8}>
<Container className='mt-4 pt-4'>
  <Row> <Col >
      <Form.Floating className="mt-4">
        <Form.Control
          id="floatingInputCustom"
          type="text"
          placeholder="Your Name"
        />
        <label htmlFor="floatingInputCustom">Name</label>
      </Form.Floating>
      </Col>
      <Col>
      <Form.Floating  className="mt-4">
        <Form.Control
          id="floatingEmailCustom"
          type="email"
          placeholder="abc@gmail.com"
        />
        <label htmlFor="floatingEmailCustom">Email</label>
      </Form.Floating>
      </Col>
      </Row>
      <Row>
        <Col>
        <Form.Floating className='mt-4'>
        <Form.Control
          id="floatingEmailCustom"
          type="text"
          placeholder=""
        />
        <label htmlFor="floatingInputCustom">Your Subject</label>
      </Form.Floating></Col>
      </Row>
      <Row>
        <Col>
        <Form.Floating className="mt-4 ">
        <Form.Control
      
          id="floatingInputCustom"
          type="text"
          placeholder=""
        
        />
        <label htmlFor="floatingInputCustom">Your Message</label>
      </Form.Floating></Col>
      </Row>
      <Row className='justify-content-end mt-4'>
      <Button variant="success"  style={{ width: '150px' }}> Send Message</Button>
      </Row>
      </Container>
      </Col>
      </Row>
      </Container>
      </Container>
    
    </>
  );
}

export default FormFloatingCustom;