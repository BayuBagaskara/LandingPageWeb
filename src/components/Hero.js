import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Hero = () => {
  return (
    <Container fluid className="bg-primary text-white text-center">
      <Row>
      <Col>
        <h1>Selamat Datang di Sekolah Kami SMK TI BAZMA</h1>
        <p>Energi Masa Depan Indonesia.</p>
        </Col>  
      </Row>
    </Container>
  );
};

export default Hero;
