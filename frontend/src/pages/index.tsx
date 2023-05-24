import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CardPost from '../components/Card';
import NavBar from '../components/Navbar';
import JestCompany from '../JestCompany';

export default function Home() {

  /**
   *  Importa entidade do Framework Project
   */
  const [Posts, setPosts] = useState([]);

  useEffect(() => {

    JestCompany
    .Post
    .list({})
    .then(result => setPosts(result.data))

  },[])

  return (
    <>
      <Head>
        <title>Jest Company</title>
      </Head>
      <NavBar />
      <Container>
        <Row 
        className='justify-content-center ' >
          <Col sm={12} md={8} lg={6} >
            {Posts?.map((post:any) => <CardPost key={post.id} obj={post} />)}
          </Col>
        </Row>
      </Container>
    </>
  );
}