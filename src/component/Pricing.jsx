import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/Button"
import Image from "react-bootstrap/Image"
import '../App.css';
function GridExample() {
  return (
    <>
    <Container id="pricing" className='mb-5'><br />

      <h1 className='text-center'>OUR PRICING</h1><br />
      <hr className='my-custom-hr' />
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
                  Support: No <br /><br />
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
                  Support: Yes <br /><br />
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
                  Support: Yes <br /> <br />
                  unlimited Domain <br /><br />
                  No Hidden Fees <br /><br />
                </Card.Text>
                <Button variant="success"> Join Now</Button>
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
    
        <Col>
          <Card>
            <Container className='text-center'>
              <Card.Body>
                <Card.Title>  <Image src="https://tinyurl.com/3vwzw2ux" className='img1 pt-3'></Image></Card.Title>
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
                <Card.Title>  <Image src="https://tinyurl.com/7mj58ee9" className='img1 pt-3'></Image></Card.Title>
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
                <Card.Title>  <Image src="https://tinyurl.com/2utdxuuf" className='img1 pt-3'></Image></Card.Title>
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

<div id="home" className='section-feature '>

<Container fluid className="bg-image1 pt-5 text-white text-center my-auto">
<Container className='justify-content-center align-item-center'>
<Container fluid justify-content-center>
  <Row>
    <Col  className="text-white text-center">
      <h1 className="">Let's Get Started</h1>
   <hr className='my-custom-hr' /> 
      <p  className="form-secondary pb-5"> <b> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</b></p>
    
      <Button variant="light">Get Started</Button>{' '}
      
    </Col>
  </Row>
</Container>


  </Container>

</Container>


</div>
    </>
  );
}

export default GridExample;
