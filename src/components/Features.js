import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Features = () => {
return (
<Container id="features" className="my-5">
      <h2>Fitur Unggulan</h2>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Fasilitas Lengkap</Card.Title>
              <Card.Text>
                Kami menyediakan fasilitas lengkap untuk mendukung proses belajar mengajar.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Guru Berpengalaman</Card.Title>
              <Card.Text>
                Guru-guru kami adalah profesional di bidangnya dan berpengalaman.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Kurikulum Terbaru</Card.Title>
              <Card.Text>
                Kurikulum kami selalu diperbarui sesuai dengan perkembangan zaman.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
</Container>
);
};

export default Features;
