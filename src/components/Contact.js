import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container id="contact" className="my-5">
      <h2>Kontak Kami</h2>
      <Form>
        <Form.Group controlId="formName">
          <Form.Label>Nama</Form.Label>
          <Form.Control type="text" placeholder="Masukkan nama Anda" />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Masukkan email Anda" />
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Pesan</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Masukkan pesan Anda" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Kirim
        </Button>
      </Form>
    </Container>
  );
};

export default Contact;