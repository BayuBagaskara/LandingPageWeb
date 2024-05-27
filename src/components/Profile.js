import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Profile = () => {
  return (
    <Container id="profile" className="my-5">
      <h2>Profil Sekolah</h2>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Sejarah Sekolah</Card.Title>
              <Card.Text>
              Sekolah Menengah Kejuruan Teknologi Informasi Bazma (SMK TI BAZMA) merupakan sekolah unggulan berasrama yang diperuntukkan bagi anak-anak tidak mampu. Pembangunan sekolah, baik fasilitas maupun operasional didanai dari hasil pengelolaan wakaf dan sumber dana sosial kemanusiaan lainnya yang diamanahkan oleh masyarakat.

SMK TI BAZMA menyelenggarakan program pembelajaran yang ditempuh selama 4 tahun dengan siswa-siswa yang berasal dari berbagai daerah di seluruh Indonesia. SMK TI Bazma menyelenggarakan pendidikan dengan jurusan SIJA (Sistem Informatika, Jaringan & Aplikasi) dengan kombinasi kurikulum berbasis asrama.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Visi dan Misi</Card.Title>
              <Card.Text>
                Visi: Menjadi sekolah yang melahirkan generasi berkarakter unggul, berkepribadian Islami, mandiri, beprestasi dan menebar manfaat.
                <br />
                Misi:Menyelenggarkan Sekolah Menengah Kejuruan (SMK) yang berkualitas,
Melahirkan lulusan yang berkarakter unggul siap kerja,
Mewujudkan generasi SDM yang berdaya saing global.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={12}>
          <Card>
            <Card.Body>
              <Card.Title>Fasilitas</Card.Title>
              <Card.Text>
              SMK TI Bazma merupakan sekolah berbasis asrama dengan fasilitas yang mumpuni demi mendukung proses belajar yang nyaman dan kondusif. Fasilitas di asrama terdiri dari fasilitas umum dan kamar tidur.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;