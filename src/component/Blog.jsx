import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Link} from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../App.css';

function GroupExample() {
  return (
    <>
    <Container justify-content-center align-item-center id="blog">
   < Container  className='text-center'>
    <h1>LATEST NEWS</h1><br />
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
    </>
  );
}

export default GroupExample;