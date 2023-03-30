import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';
import '../App.css';

function Contact() {
  return (
    <>
    <div className='mt-5'>
      <Container id="contact" className='pt-5'>
        <h1 className='text-center'>GET IN TOUCH</h1>
        <hr className='my-custom-hr'/>
        <p className='text-muted text-center pt-4 font-secondary'>
          We thrive when coming up with innovative ideas but also understand that a smart concept should be supported with measurable results.
        </p>
        <Container   className='mt-4 pt-4'>
          <Row className='mt-4 pt-4'>
            <Col md={4}>
              <p><b> Office Address 1:</b></p>
              <p className='text-muted'>4461 Cedar Street Moro, AR 72368</p>
              <p><b> Office Address 2:</b></p>
              <p className='text-muted'>2467 Swick Hill Street New Orleans, LA 70171</p>
              <p><b> Working Hours:</b></p>
              <p className='text-muted'>9:00AM To 6:00PM</p>
            </Col>

            <Col md={8}>
              <Container className=''>
                <Row>
                  <Col>
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
                    <Form.Floating className="mt-4">
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
                    </Form.Floating>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Floating className="mt-4">
                      <Form.Control
                        id="floatingInputCustom"
                        type="text"
                        placeholder=""
                      />
                      <label htmlFor="floatingInputCustom">Your Message</label>
                    </Form.Floating>
                  </Col>
                </Row>

                <Row className='justify-content-end mt-4'>
                  <Col md={4} className='text-center  '>
                    <Button variant="success" style={{ width: '150px' }}><a href="#" style={{ textDecoration: 'none', color: "white"}}>Send Message </a></Button>
                  
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </Container>
      </div>
    </>
  );
}

export default Contact;







