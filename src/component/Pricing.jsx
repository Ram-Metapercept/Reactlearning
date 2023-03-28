import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/Button"
function GridExample() {
  return (
    <Container><br/> 

        <h1 className='text-center'>OUR PRICING</h1><br />
        <p className='text-center text-muted'>Call to action pricing table is really crucial to your for your business website. Make your bids stand-out with amazing options.</p>

    <Row xs={1} md={3} className="g-4">

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
  );
}

export default GridExample;