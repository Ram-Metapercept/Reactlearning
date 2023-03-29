import React from 'react'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Card from 'react-bootstrap/Card';
import '../App.css';
import Container from 'react-bootstrap/Container';
import { Stack,Form } from 'react-bootstrap';
import Footer from './Footer';
function Home() {

  return (
    <>
    <div id="home" className='section-feature'>

    <Container fluid className="bg-image pt-5 text-white text-center">
    <Container className='justify-content-center align-item-center'>
  <Container fluid justify-content-center>
      <Row>
        <Col lg={8} className="text-white text-center">
          <h4 className="home-small-title">Awesome Design</h4>
          <h1 className="home-title">We love make things amazing and simple</h1>
          <p className="pt-3 home-desc mx-auto">Maecenas class semper class semper sollicitudin lectus lorem iaculis imperdiet aliquam vehicula
            tempor auctor curabitur pede aenean ornare.</p>
          <p className="play-shadow mt-4">
            <a href="https://i.ytimg.com/an_webp/zGXGA1dMYu4/mqdefault_6s.webp?du=3000&sqp=COKMkKEG&rs=AOn4CLA9qRveJz-w_Ad7qWAEguKPrUnBDQ" className="play-btn video-play-icon">
        
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="24" fill="currentColor" class="bi bi-play" viewBox="0 0 16 16">
  <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
</svg>
            </a>
      
          </p>
        </Col>
      </Row>
    </Container>


      </Container>
   
    </Container>
    <Container className='mt-5'>
    <Row>
  <Col lg={3}> <Image Src="https://tinyurl.com/mrxah4df"></Image></Col>
  <Col lg={3}> <Image Src="https://tinyurl.com/y3ccw8y9"></Image></Col>
  <Col lg={3}> <Image Src="https://tinyurl.com/4emcrbrj"></Image></Col>
  <Col lg={3}> <Image Src="https://tinyurl.com/52ctwz7z"></Image></Col>
</Row>
    </Container>

    </div>



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


<Container id="service" className='section-feature'>
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
    

    <Container className='justify-content-center align-item-center'  id="about"  ><br /><br />
        <h1 className='text-center'>A Digital web studio creating stunning & Engaging online Experiences</h1><br /><br />
        <p className='text-center text-muted'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nasceturridiculus mus donec various versions have evolved quam felis.</p>
        <Stack direction='horizontal'>
         <Row xs={1} md={4} className="g-4">
            <Col >
            <Card  >
              <Card.Img variant='top' src='https://tinyurl.com/5n77m6t5' />
              <Card.Body className='text-center'>
                <Card.Title>Frank Johnson</Card.Title>
                <Card.Text className='text-muted'>
                  CEO
                </Card.Text>
              </Card.Body>
            </Card>
            </Col>
            <Col >
            <Card>
              <Card.Img variant='top' src='https://tinyurl.com/yc7mkpek' />
              <Card.Body className='text-center'>
                <Card.Title>Elaine Stclair</Card.Title>
                <Card.Text className='text-muted'>
                  DESIGNER
                </Card.Text>
              </Card.Body>
            </Card>
            </Col >
            <Col >
            <Card>
              <Card.Img variant='top' src='https://tinyurl.com/yze8hr58' />
              <Card.Body className='text-center'>
                <Card.Title>Wanda Arthur</Card.Title>
                <Card.Text className='text-muted'>
                  DEVELOPER
                </Card.Text>
              </Card.Body>
            </Card>
            </Col >
            <Col >
            <Card>
              <Card.Img variant='top' src='https://tinyurl.com/4npp6p5r' />
              <Card.Body className='text-center'>
                <Card.Title>Joshua Stemple</Card.Title>
                <Card.Text>
                  MANAGER
                </Card.Text>
              </Card.Body>
            </Card>
            </Col >
            </Row>
        </Stack>
      </Container>
      <Container id="pricing"  ><br/> 

<h1 className='text-center '>OUR PRICING</h1><br />
<hr className='my-custom-hr'/>
<p className=' font-secondary text-center text-muted subtitle pt-4'>Call to action pricing table is really crucial to your for your business website. Make your bids stand-out with amazing options.</p>

<Row xs={1} md={3} className="g-4 mt-5" >

<Col>
  <Card shadow={3}>
  <Container className='text-center'>
    <Card.Body>
      <Card.Title>Economy</Card.Title>
    <b> <Card.Title style={{ fontSize: '3rem' }} className="center">$9.90</Card.Title> </b> 
      <Card.Text>
      BILLING PER MONTH <br /><br />
      Bandwidth: 1GB <br /><br />
      Onlinespace: 50MB <br /><br />
     Support: No <br/><br />
     1 Domain <br /><br />
     No Hidden Fees <br /><br />
        </Card.Text>
        <Button variant="success"> Join Now</Button>
    </Card.Body>

    
    </Container>
  </Card>
</Col>
<Col>
<Card>
  <Container className='text-center'>
    <Card.Body>
      <Card.Title>Economy</Card.Title>
    <b> <Card.Title style={{ fontSize: '3rem' }} className="center">$19.90</Card.Title> </b> 
      <Card.Text>
      BILLING PER MONTH <br /><br />
      Bandwidth: 10 GB <br /><br />
      Onlinespace: 500MB <br /><br />
     Support: Yes <br/><br />
     10 Domain <br /><br />
     No Hidden Fees <br /><br />
        </Card.Text>
        <Button variant="success"> Join Now</Button>
    </Card.Body>

   
    </Container>
  </Card>
</Col>
<Col>
<Card>
  <Container className='text-center'>
    <Card.Body>
      <Card.Title>Economy</Card.Title>
    <b> <Card.Title style={{ fontSize: '3rem' }} className="center">$29.90</Card.Title> </b> 
      <Card.Text>
      BILLING PER MONTH <br /><br />
      Bandwidth: 100GB <br /><br />
      Onlinespace: 2GB <br /><br />
     Support: Yes <br/> <br/> 



     unlimited Domain <br /><br/> 
     No Hidden Fees <br /><br/> 
        </Card.Text>
        <Button variant="success"> Join Now</Button>
    </Card.Body>

    </Container>
  </Card>
</Col>

</Row>
</Container>
<Container justify-content-center  id="blog" className='section-feature'>
<h1 className='text-center'>LATEST NEWS</h1><br />
   < Container  className='text-center'>
   
    <hr className='my-custom-hr'/>
    <p className="text-muted" >Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean class at a euismod mus luctus quam.</p>
    </Container><br /><br />
    <Row xs={1} md={4} className="g-4">
   <Col>
      <Card>
        <Card.Img variant="top" src="https://tinyurl.com/ydp4952c" />
        <Card.Body>
        <Card.Text className="text-muted">
        UI & UX Design
          </Card.Text>
          <Card.Title>  Doing a cross country road trip</Card.Title>
        
          <small className="text-muted">She packed her seven versalia, put her initial into the belt and made herself on the way..</small>
      
        </Card.Body>
      
        
      </Card>
      
      </Col>
      <Col>
      <Card>
        <Card.Img variant="top" src="https://tinyurl.com/42pd9syn" />
        <Card.Body>
        <Card.Text className="text-muted">
        Digital Marketing
          </Card.Text>
          <Card.Title>  New exhibition at our Museum
</Card.Title>
        
          <small className="text-muted">Pityful a rethoric question ran over her cheek, then she continued her way..</small><br /><br />
      
        </Card.Body>
        
      </Card>
      </Col>
      
      <Col>
      <Card>
        <Card.Img variant="top" src="https://tinyurl.com/5yh4jyhe" />
        <Card.Body>
        <Card.Text className="text-muted">
        Travelling
          </Card.Text>
          <Card.Title>Why are so many people..</Card.Title>
        
          <small className="text-muted">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</small><br /><br />

      
        </Card.Body>
      </Card>
 
      </Col>
      </Row>
    </Container>
    <Container id="contact" className='section-feature' >
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
      <Footer/>
    </>
  )
}

export default Home