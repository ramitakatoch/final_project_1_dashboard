import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminNavbar from '../adminNavbar'
import Table from 'react-bootstrap/Table';
import { reviewObject } from '../../dataset'
import ReviewForm from './reviewform';



const Category = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col className='offset-2'>
                        <Container fluid>
                            <Row>
                                <AdminNavbar />
                                <Col lg='12' md='12' sm='12' className='text-center py-5 bg-success text-white'>
                                    <h1>Customers Reviews</h1>
                                </Col>
                            </Row>
                            <Row className='m-5'>
                                <Col lg='12' md='12' sm='12'>
                                    <ReviewForm />
                                </Col>

                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Category
