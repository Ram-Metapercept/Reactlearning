// import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';
// import Stack from 'react-bootstrap/Stack';
// import Container from 'react-bootstrap/Container';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// function GroupExample() {
//   return (
//     <>
//       <Container className='justify-content-center align-item-center'><br /><br />
//         <h1 className='text-center'>A Digital web studio creating stunning & Engaging online Experiences</h1><br /><br />
//         <p className='text-center text-muted'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nasceturridiculus mus donec various versions have evolved quam felis.</p>
//         <Stack direction='horizontal'className="g-4">
//           <CardGroup  >
//             <Card  >
//               <Card.Img variant='top' src='https://tinyurl.com/5n77m6t5' />
//               <Card.Body className='text-center'>
//                 <Card.Title>Frank Johnson</Card.Title>
//                 <Card.Text className='text-muted'>
//                   CEO
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//             <Card>
//               <Card.Img variant='top' src='https://tinyurl.com/yc7mkpek' />
//               <Card.Body className='text-center'>
//                 <Card.Title>Elaine Stclair</Card.Title>
//                 <Card.Text className='text-muted'>
//                   DESIGNER
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//             <Card>
//               <Card.Img variant='top' src='https://tinyurl.com/yze8hr58' />
//               <Card.Body className='text-center'>
//                 <Card.Title>Wanda Arthur</Card.Title>
//                 <Card.Text className='text-muted'>
//                   DEVELOPER
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//             <Card>
//               <Card.Img variant='top' src='https://tinyurl.com/4npp6p5r' />
//               <Card.Body className='text-center'>
//                 <Card.Title>Joshua Stemple</Card.Title>
//                 <Card.Text>
//                   MANAGER
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </CardGroup>
//         </Stack>
//       </Container>
//     </>
//   );
// }

// export default GroupExample;



import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
function GroupExample() {
  return (
    <>
      <Container className='justify-content-center align-item-center'  id="about"><br /><br />
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
    </>
  );
}

export default GroupExample;
