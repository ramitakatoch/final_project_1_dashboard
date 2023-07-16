import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminNavbar from '../adminNavbar'
import Table from 'react-bootstrap/Table';
import { productObject } from '../../dataset'
import { AiOutlinePlusCircle } from "react-icons/ai";
import AddNewProduct from './addNewProduct'


const Product = () => {
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
                                    <h1 className='border-bottom'>Product</h1>
                                    <button onClick={() => setModalShow(true)}><AiOutlinePlusCircle /> Add New Product</button>

                                    <AddNewProduct show={modalShow} onHide={() => setModalShow(false)} />
                                    <hr />
                                    <Table striped hover responsive>
                                        <thead>
                                            <tr>
                                                <th>S.No</th>
                                                <th>productName</th>
                                                <th>productPrice</th>
                                                <th>manufacture</th>
                                                <th>quantity</th>
                                                <th>updatedOn</th>
                                                <th>actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {productObject.map((i, j) => {
                                                return (
                                                    <>
                                                        <tr key={i.id}>
                                                            <th scope="row">{j + 1}</th>
                                                            <td>{i.productName}</td>
                                                            <td>{i.productPrice}</td>
                                                            <td>{i.manufacture}</td>
                                                            <td>{i.quantity}</td>
                                                            <td>{i.updatedOn}</td>
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

export default Product
