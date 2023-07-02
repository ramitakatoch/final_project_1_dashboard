import React from 'react'
import {Row, Col } from 'react-bootstrap'

const AdminDashboard = () => {
  return (
    <>
      <Col lg='10' md='10' sm='8' xs='8'>
        <h1 className='border-bottom mx-3'>Admin Dashboard</h1>
            <Row className='d-flex gap-3 mx-3'>
                <Col className='border rounded text-center'>
                <h1 className='border-bottom p-3'>6</h1>
                <p className='fs-3 p-3'>Customer Object</p>
                </Col>
                
                <Col className='border rounded text-center'>
                <h1 className='border-bottom p-3'>6</h1>
                <p className='fs-3 p-3'>Category Object</p>
                </Col>
                
                <Col className='border rounded text-center'>
                <h1 className='border-bottom p-3'>6</h1>
                <p className='fs-3 p-3'>Product Object</p>
                </Col>

                <Col  className='border rounded text-center'>
                <h1 className='border-bottom p-3'>6</h1>
                <p className='fs-3 p-3'>Order Object</p>
                </Col>
                
            </Row>

      </Col>
    </>
  )
}

export default AdminDashboard
