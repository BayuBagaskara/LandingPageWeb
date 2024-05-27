import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>SMK TI BAZMA</h5>
            <p>Sekolah Menengah Kejuruan Teknologi Informasi Bazma (SMK TI BAZMA) merupakan sekolah unggulan berasrama yang diperuntukkan bagi anak-anak tidak mampu.</p>
          </Col>
          <Col md={4}>
            <h5>Kontak</h5>
            <p>Email: info@smktibazma.sch.id</p>
            <p>Telepon: 08 1111 4433 9</p>
          </Col>
          <Col md={4}>
            <h5>Alamat</h5>
            <p>Jl. Raya Cikampak Cicadas RT. 001/RW 001. Kecamatan Ciampea, Kabupaten Bogor. Jawa Barat 16620</p>
          </Col>
        </Row>
        <Row className="text-center mt-3">
          <Col>
            <p>&copy; SMKTIBazma © 2021</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;