import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/Button"
import Image from "react-bootstrap/Image"
import { ArrowRight } from 'react-bootstrap-icons';
import { ListGroup } from 'react-bootstrap';
import '../App.css';
function GridExample() {
  return (
    <>
    <div className="mt-5"id="pricing">
    <Container  className='mb-5 pt-5'><br />

      <h1 className='text-center'>OUR PRICING</h1><br />
      <hr className='my-custom-hr' />
      <p className=' font-secondary text-center text-muted subtitle pt-4 '>Call to action pricing table is really crucial to your for your business website. Make your bids stand-out with amazing options.</p>

      <Row xs={1} md={3} className="g-4 mt-5" >
        <Col>
          <Card shadow={3}>
            <Container className='text-center'>
              <Card.Body>
                <Card.Title>Economy</Card.Title>
                <b> <Card.Title style={{ fontSize: '3rem' }} className="center">$9.90</Card.Title> </b>
                <Card.Text>
             
                <ListGroup variant="flush" className='lists border-0'>
                  <ListGroup.Item  className="lists border-0 ">BILLING PER MONTH</ListGroup.Item>
                  <ListGroup.Item  className="lists border-0">Bandwidth: <span className='text-success'><b> 1GB</b></span>
                  </ListGroup.Item>
                  <ListGroup.Item  className="lists border-0">Onlinespace: <span className='text-success'><b>50MB</b></span></ListGroup.Item>
                  <ListGroup.Item  className="lists border-0">Support:<span className='text-success'><b> No </b></span></ListGroup.Item>
                  <ListGroup.Item  className="lists border-0"><span className='text-success'><b>1 </b></span>Domain</ListGroup.Item>
                  <ListGroup.Item  className="lists border-0"> <span className='text-success'><b> No </b></span>Hidden Fees</ListGroup.Item>
                </ListGroup>
                </Card.Text>
                <Button variant="success" className="btn-hover mt-3"> <a href="#" style={{ textDecoration: 'none', color:"white"}}>Join Now</a> </Button>
              </Card.Body>
            </Container>
          </Card>
        </Col>
        <Col>
          <Card>
            <Container className='text-center'>
            <Card.Body>
                <Card.Title>DELUXE</Card.Title>
                <b> <Card.Title style={{ fontSize: '3rem' }} className="center">$19.90</Card.Title> </b>
                <Card.Text>
             
             <ListGroup variant="flush" className='lists border-0'>
               <ListGroup.Item  className="lists border-0 ">BILLING PER MONTH</ListGroup.Item>
               <ListGroup.Item  className="lists border-0">Bandwidth: <span className='text-success'><b> 10GB</b></span>
               </ListGroup.Item>
               <ListGroup.Item  className="lists border-0">Onlinespace: <span className='text-success'><b>500MB</b></span></ListGroup.Item>
               <ListGroup.Item  className="lists border-0">Support:<span className='text-success'><b> Yes </b></span></ListGroup.Item>
               <ListGroup.Item  className="lists border-0"><span className='text-success'><b>10 </b></span>Domain</ListGroup.Item>
               <ListGroup.Item  className="lists border-0"> <span className='text-success'><b> No </b></span>Hidden Fees</ListGroup.Item>
             </ListGroup>
             </Card.Text>
                <Button variant="success" className="btn-hover mt-3"> <a href="#" style={{ textDecoration: 'none', color:"white"}}>Join Now</a> </Button>
              </Card.Body>
            </Container>
          </Card>
        </Col>
        <Col>
          <Card>
            <Container className='text-center'>
            <Card.Body>
                <Card.Title>ULTIMATE</Card.Title>
                <b> <Card.Title style={{ fontSize: '3rem' }} className="center">$29.90</Card.Title> </b>
                <Card.Text>
             
             <ListGroup variant="flush" className='lists border-0'>
               <ListGroup.Item  className="lists border-0 ">BILLING PER MONTH</ListGroup.Item>
               <ListGroup.Item  className="lists border-0">Bandwidth: <span className='text-success'><b> 100GB</b></span>
               </ListGroup.Item>
               <ListGroup.Item  className="lists border-0">Onlinespace: <span className='text-success'><b>2GB</b></span></ListGroup.Item>
               <ListGroup.Item  className="lists border-0">Support:<span className='text-success'><b> Yes </b></span></ListGroup.Item>
               <ListGroup.Item  className="lists border-0"><span className='text-success'><b>Unlimited </b></span>Domain</ListGroup.Item>
               <ListGroup.Item  className="lists border-0"> <span className='text-success'><b> No </b></span>Hidden Fees</ListGroup.Item>
             </ListGroup>
             </Card.Text>
                <Button variant="success" className="btn-hover mt-3"> <a href="#" style={{ textDecoration: 'none', color:"white"}}>Join Now</a> </Button>
              </Card.Body>

            </Container>
          </Card>
        </Col>
      </Row>
      
    </Container>

    <Container>
 
        <h1 className='text-center'>WHAT THEY'VE SAID</h1>
        <hr className='my-custom-hr' />
        <p className='text-center  mx-auto'>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli.</p>
      
      <Row className="g-6 mt-5 mb-5">
      {/* https://tinyurl.com/3vwzw2ux */}
    
        <Col>
          <Card>
            <Container className='text-center'>
              <Card.Body>
                <Card.Title>  <Image src="https://tinyurl.com/3vwzw2ux" className='img1 pt-3 rounded-circle shadow-4-strong'></Image></Card.Title>
                <span>   <b>LAURIE BELL</b>- Worcester</span>
                <Card.Text>
               <i><p className='text-muted pt-3'>“I feel confident imposing change on myself. It's a lot more fun progressing than looking back. That's why I ultricies enim at malesuada nibh diam on tortor neaded to throw curve balls.”</p></i> 
                </Card.Text>
               
              </Card.Body>
            </Container>
          </Card>
        </Col>
        <Col>
          <Card>

            <Container className='text-center'>
              <Card.Body>
                <Card.Title>  <Image src="https://tinyurl.com/7mj58ee9" className='img1 pt-3 rounded-circle shadow-4-strong'></Image></Card.Title>
                <span>   <b>DENNIS WILLIAMS </b>- Charleston</span>
                <Card.Text>
                <i>    <p className='text-muted pt-3'>“I feel confident imposing change on myself. It's a lot more fun progressing than looking back. That's why I ultricies enim at malesuada nibh diam on tortor neaded to throw curve balls.”</p></i> 
                </Card.Text>
               
              </Card.Body>
            </Container>
          </Card>
        </Col>
        <Col>
          <Card>
            <Container className='text-center'>
              <Card.Body>
                <Card.Title>  <Image src="https://tinyurl.com/2utdxuuf" className='img1 pt-3 rounded-circle shadow-4-strong'></Image></Card.Title>
                <span>   <b>HOWARD KELLEY</b> - Lynchburg</span>
                <Card.Text>
                <i>  <p className='text-muted pt-3'>“I feel confident imposing change on myself. It's a lot more fun progressing than looking back. That's why I ultricies enim at malesuada nibh diam on tortor neaded to throw curve balls.”</p></i> 
                </Card.Text>
               
              </Card.Body>
            </Container>
          </Card>
        </Col>
</Row>
</Container>
<div id="home" className='section-feature'>

  <Container fluid className="bg-image1 pt-5 text-white text-center my-auto">
    <Container>
      <Row className='justify-content-center align-items-center'>
        <Col xs={12} sm={10} md={8} lg={6} className="text-white text-center">
          <h1 className="">Let's Get Started</h1>
          <hr className='my-custom-hr' /> 
          <p className="font-secondary "> <b> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</b></p>
          <Button variant="light"><a href="#" style={{ textDecoration: 'none', color: "black"}}>Get Started <ArrowRight/> </a></Button>
          {/* <b className='ml-5 readMore'></b> */}
        </Col>
      </Row>
    </Container>
  </Container>

</div>
</div>
    </>
  );
}

export default GridExample;
