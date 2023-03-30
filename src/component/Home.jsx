
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
import Feature from './Feature';
import Service from './Service';
import About from "./About"
import Pricing from "./Pricing"
import Blog from "./Blog"
import Contact from "./Contact"
function Home() {

  return (
    <>
    <div id="home" className='section-feature mt-5' >
    <Container fluid className="bg-image pt-5 text-white text-center">
  <Container className='justify-content-center align-items-center'>
    <Row  xs={1} sm={2} md={4}>
      <Col xs={12} lg={8} className="text-white text-center m-auto">
        <h4 className="m-auto">Awesome Design</h4>
        <h2 className="home-title">We love make things amazing and simple</h2>
        <p className="pt-3 home-desc mx-auto">Maecenas class semper class semper sollicitudin lectus lorem iaculis imperdiet aliquam vehicula tempor auctor curabitur pede aenean ornare.</p>
        <div className="play-shadow mt-n5">
          <a href="https://i.ytimg.com/an_webp/zGXGA1dMYu4/mqdefault_6s.webp?du=3000&sqp=COKMkKEG&rs=AOn4CLA9qRveJz-w_Ad7qWAEguKPrUnBDQ" className="play-btn video-play-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="24" fill="currentColor" className="bi bi-play" viewBox="0 0 16 16">
              <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
            </svg>
          </a>
        </div>
      </Col>
    </Row>
  </Container>
</Container>
<Container className='mt-5 mb-5'xs={1} sm={2} md={4}>
    <Row xs={1} sm={2} md={4}>
    <Col>
      <Image src="https://tinyurl.com/mrxah4df" fluid />
    </Col>
    <Col>
      <Image src="https://tinyurl.com/y3ccw8y9" fluid />
    </Col>
    <Col>
      <Image src="https://tinyurl.com/4emcrbrj" fluid />
    </Col>
    <Col>
      <Image src="https://tinyurl.com/52ctwz7z" fluid />
    </Col>
  </Row>
    </Container>
  </div>
 

  <Feature/>
<Service/>
<About/>
<Pricing/>
<Blog/>
<Contact/>

<Footer/>


    </>
  )
}

export default Home

