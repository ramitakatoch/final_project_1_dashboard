import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminNavbar from '../adminNavbar'
import Table from 'react-bootstrap/Table';
import { customerObject } from '../../dataset'
import { AiOutlinePlusCircle } from "react-icons/ai";
import AddNewCustomer from './addNewCustomer';


const Customer = () => {
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
    }, [])
    return (
        <>
            <Container fluid>
                <Row>
                    <Col className='offset-2'>
                        <Container fluid>
                            <Row>
                                <AdminNavbar />
                                <Col lg='12' md='12' sm='12'>
                                    <h1 className='border-bottom'>Customer</h1>
                                    <button onClick={() => setModalShow(true)}><AiOutlinePlusCircle /> Add New Customer</button>

                                    <AddNewCustomer show={modalShow} onHide={() => setModalShow(false)} />
                                    <hr />
                                    <Table striped hover responsive>
                                        <thead>
                                            <tr>
                                                <th>S.No</th>
                                                <th>firstName</th>
                                                <th>lastName</th>
                                                <th>email</th>
                                                <th>contact</th>
                                                <th>address</th>
                                                <th>createdOn</th>
                                                <th>status</th>
                                                <th>actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {customerObject.map((i, j) => {
                                                return (
                                                    <>
                                                        <tr key={i.id}></tr>
                                                        <tr key={i.id}>
                                                            <th scope="row">{j + 1}</th>
                                                            <td>{i.firstName}</td>
                                                            <td>{i.lastName}</td>
                                                            <td>{i.email}</td>
                                                            <td>{i.contact}</td>
                                                            <td>{i.address}</td>
                                                            <td>{i.createdOn}</td>
                                                            <td>{i.status}</td>
                                                            <td>{i.actions}</td>
                                                        </tr>
                                                    </>
                                                )

                                            })}
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Customer
