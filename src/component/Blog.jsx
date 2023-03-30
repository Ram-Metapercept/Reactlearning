import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../App.css';
import { ArrowRight } from 'react-bootstrap-icons';

function Blog() {
  return (
    <>
    <div id="blog" className='mt-5'>
      <Container  className='text-center pt-5'>
        <h1>LATEST NEWS</h1>
        <hr className='my-custom-hr '/>
        <p className="text-muted mb-5">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean class at a euismod mus luctus quam.</p>
      </Container>
      <Container>
        <Row xs={1} md={3} className="g-4 justify-content-center ">
          <Col>
          
            <Card className='card-hover '>
            <Card.Img variant="top" src="https://tinyurl.com/ydp4952c" />
            <Card.Body>
              <Card.Text className="text-muted">UI & UX Design</Card.Text>
              <Card.Title>Doing a cross country road trip</Card.Title>
              <small className="text-muted">She packed her seven versalia, put her initial into the belt and made herself on the way..</small><br /><br />
              
              <b className='ml-5 readMore'><a href="#" style={{ textDecoration: 'none', color: "rgb(102, 216, 102)"}}>Read More <ArrowRight/> </a></b>
            </Card.Body>
          
          </Card>
          </Col>
          <Col>
            <Card className='card-hover '>
              <Card.Img variant="top" src="https://tinyurl.com/42pd9syn" />
              <Card.Body>
                <Card.Text className="text-muted">Digital Marketing</Card.Text>
                <Card.Title>New exhibition at our Museum</Card.Title>
                <small className="text-muted">Pityful a rethoric question ran over her cheek, then she continued her way..</small><br /><br />
                <b className='ml-5 readMore'><a href="#" style={{ textDecoration: 'none', color: "rgb(102, 216, 102)"}}>Read More <ArrowRight/> </a></b>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='card-hover '>
              <Card.Img variant="top" src="https://tinyurl.com/5yh4jyhe" />
              <Card.Body>
                <Card.Text className="text-muted">Travelling</Card.Text>
                <Card.Title>Why are so many people..</Card.Title>
                <small className="text-muted">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</small><br /><br />
                <b className='ml-5 readMore'><a href="#" style={{ textDecoration: 'none', color: "rgb(102, 216, 102)"}}>Read More <ArrowRight/> </a></b>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      </div>
    </>
  );
}

export default Blog;
