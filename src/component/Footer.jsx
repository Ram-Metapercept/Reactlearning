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
    <div className='ml-5 footer'>
      <Container fluid className='footer-section mt-5'>
        <Row >
          <Col lg={1} md={6} className="mx-auto text-white mb-5 ">
            <h4 className='ml-5'>HIRIC</h4>
            <Row className='mx-auto text-muted mt-4'>
              <Col>
                <p><a href="#" style={{ textDecoration: 'none', color: "gray" }}>Home</a></p>
                <p><a href="#" style={{ textDecoration: 'none', color: "gray" }}>About us</a></p>
                <p><a href="#" style={{ textDecoration: 'none', color: "gray" }}>Careers</a></p>
                <p><a href="#" style={{ textDecoration: 'none', color: "gray" }}>Contact us</a></p>

              </Col>
            </Row>
          </Col>
          <Col lg={1} md={6} className="mx-auto text-white">
            <h4>Information</h4>
            <Row className='mx-auto text-muted mt-4'>
              <Col>
                <p><a href="#" style={{ textDecoration: 'none', color: "gray" }}>Terms</a></p>
                <p><a href="#" style={{ textDecoration: 'none', color: "gray" }}>About us</a></p>
                <p><a href="#" style={{ textDecoration: 'none', color: "gray" }}>Jobs</a></p>
                <p><a href="#" style={{ textDecoration: 'none', color: "gray" }}>Bookmarks</a></p>

              </Col>
            </Row>
          </Col>
          <Col lg={1} md={6} className="mx-auto text-white">
            <h4>Support</h4>
            <Row className='mx-auto text-muted mt-4'>
              <Col>
                <p><a href="#" style={{ textDecoration: 'none', color: "gray" }}>FAQ</a></p>
                <p><a href="#" style={{ textDecoration: 'none', color: "gray" }}>Contact us</a></p>
                <p><a href="#" style={{ textDecoration: 'none', color: "gray" }}>Discussion</a></p>

              </Col>
            </Row>
          </Col>
          <Col lg={2} md={6} className="mx-auto text-white ">
            <h4 className='mx-auto'>Subscribe</h4>
            <Row className='mx-auto text-muted'>
              <Col>
                <p>In an ideal world this text wouldn’t exist, a client would acknowledge the importance of having web copy before the design starts.</p>
                <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
                  <InputGroup>
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      aria-label="Email"
                      aria-describedby="btnGroupAddon"
                      className='buttonGroup'
                    />
                    <InputGroup.Text id="btnGroupAddon"> <a href="#" style={{ textDecoration: 'none', color: "black" }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                      <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                    </svg></a></InputGroup.Text>
                  </InputGroup>
                </ButtonToolbar>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <Container fluid className='buttonGroup '>
        <Row className='py-3' xs={2} md={4} lg={4}><Col className='mx-auto'>2023@Metapercept</Col>

          <Col className="float-end pull-none "><ul className="list-inline d-flex flex-wrap social m-0">
            <li className="list-inline-item"><a href="#" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
            </svg></a></li>
            <li className="list-inline-item"><a href="#" className="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
            </svg></a></li>
            <li className="list-inline-item"><a href="#" className="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg></a></li>
            <li className="list-inline-item"><a href="#" className="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
              <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
            </svg></a></li>
            <li className="list-inline-item"><a href="#" className="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-microsoft-teams" viewBox="0 0 16 16">
              <path d="M9.186 4.797a2.42 2.42 0 1 0-2.86-2.448h1.178c.929 0 1.682.753 1.682 1.682v.766Zm-4.295 7.738h2.613c.929 0 1.682-.753 1.682-1.682V5.58h2.783a.7.7 0 0 1 .682.716v4.294a4.197 4.197 0 0 1-4.093 4.293c-1.618-.04-3-.99-3.667-2.35Zm10.737-9.372a1.674 1.674 0 1 1-3.349 0 1.674 1.674 0 0 1 3.349 0Zm-2.238 9.488c-.04 0-.08 0-.12-.002a5.19 5.19 0 0 0 .381-2.07V6.306a1.692 1.692 0 0 0-.15-.725h1.792c.39 0 .707.317.707.707v3.765a2.598 2.598 0 0 1-2.598 2.598h-.013Z" />
              <path d="M.682 3.349h6.822c.377 0 .682.305.682.682v6.822a.682.682 0 0 1-.682.682H.682A.682.682 0 0 1 0 10.853V4.03c0-.377.305-.682.682-.682Zm5.206 2.596v-.72h-3.59v.72h1.357V9.66h.87V5.945h1.363Z" />
            </svg></a></li></ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
