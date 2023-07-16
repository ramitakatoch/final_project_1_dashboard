import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminNavbar from './adminNavbar'
import IMG1 from '../../assets/img/IMG111.jpg'
import AdminForm from './adminform'

const AdminProfile = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col className='offset-2'>
            <Container fluid>
              <Row>
                <AdminNavbar />
                <Col lg='10' md='10' sm='2'>
                  <h1 className='mx-3'>Admin Profile</h1>
                  <p className='border-bottom mx-3'>
                    Dashboard/ Profile Page
                  </p>
                  <Row>
                    <Col lg='3' md='3' sm='8' className='border border-1 m-5 text-center bg-success'>
                      <img src={IMG1} alt="" className='adminpic border border-0 rounded-circle w-100 p-2' />
                      <p className='text-white fs-5'>User Name</p>
                      <p className='text-white fs-5'>info@example.com</p>
                    </Col>
                    <Col lg='6' md='6' sm='8' className='border border-1 m-5'>
                      <AdminForm />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default AdminProfile
