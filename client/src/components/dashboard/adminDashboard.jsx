import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col className='offset-2'>
            <Col lg='12' md='12' sm='12'>
              <h1 className='border-bottom mx-3'>Admin Dashboard</h1>
              <Row className='d-flex gap-3 mx-3'>
                <Col className='border rounded text-center'>
                  <h1 className='border-bottom p-3'>6</h1>
                  <Link to="/customer">
                    <p className='fs-3 p-3'>Customer Object</p>
                  </Link>
                </Col>

                <Col className='border rounded text-center'>
                  <h1 className='border-bottom p-3'>6</h1>
                  <Link to="/category">
                    <p className='fs-3 p-3'>Category Object</p>
                  </Link>
                </Col>
                <Col className='border rounded text-center'>
                  <h1 className='border-bottom p-3'>6</h1>
                  <Link to="/product">
                    <p className='fs-3 p-3'>Product Object</p>
                  </Link>
                </Col>
                <Col className='border rounded text-center'>
                  <h1 className='border-bottom p-3'>6</h1>
                  <Link to="/invoice">
                    <p className='fs-3 p-3'>Order Object</p>
                  </Link>
                </Col>
              </Row>
            </Col>
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default AdminDashboard
