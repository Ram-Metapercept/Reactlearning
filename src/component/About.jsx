import { Container, Col, Row, Card, CardGroup, Stack } from 'react-bootstrap';

function About() {
  return (
    <>
      <div id="about" className='mt-5'>
        <Container fluid className='bg-light pt-5 pb-3'>
          <Container>
            <Row className='justify-content-center align-items-center'>
              <Col xs={12} md={8} className='text-center'>
                <h1>A Digital web studio creating stunning & Engaging online Experiences</h1>
                <p className='text-muted my-4'>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nasceturridiculus mus donec various versions have evolved quam felis.
                </p>
              </Col>
            </Row>
            <Row className='justify-content-center'>
              <Col xs={12} md={10}>
                <CardGroup>
                 
                  <Stack direction="horizontal" gap={3}>
                    <Card>
                    
                      <Card.Img variant='top' src='https://tinyurl.com/5n77m6t5' />
                      <Card.Body className='text-center'>
                        <Card.Title>Frank Johnson</Card.Title>
                        <Card.Text className='text-muted'>CEO</Card.Text>
                      </Card.Body>
                      <Col/>
                    </Card>
                  
                  
                    <Card>
                      <Card.Img variant='top' src='https://tinyurl.com/yc7mkpek' />
                      <Card.Body className='text-center'>
                        <Card.Title>Elaine Stclair</Card.Title>
                        <Card.Text className='text-muted'>DESIGNER</Card.Text>
                      </Card.Body>
                    </Card>
                    <Card>
                      <Card.Img variant='top' src='https://tinyurl.com/yze8hr58' />
                      <Card.Body className='text-center'>
                        <Card.Title>Wanda Arthur</Card.Title>
                        <Card.Text className='text-muted'>DEVELOPER</Card.Text>
                      </Card.Body>
                    </Card>
                    <Card>
                      <Card.Img variant='top' src='https://tinyurl.com/4npp6p5r' />
                      <Card.Body className='text-center'>
                        <Card.Title>Joshua Stemple</Card.Title>
                        <Card.Text className='text-muted'>MANAGER</Card.Text>
                      </Card.Body>
                    </Card>
                  </Stack>
                </CardGroup>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    </>
  );
}

export default About;
