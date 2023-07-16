import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';

const InvoicePage = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col className='offset-2'>
                        <Container fluid className='invoicepage'>
                            <Row className='bg-success'>
                                <Col lg='3' className='p-5 text-white'>
                                    <h1 className='fs-1'>INVOICE</h1>

                                </Col>
                                <Col lg='4' className='p-5 text-white fs-3'>
                                    <p>642-586-4585</p>
                                    <p>info@example.com</p>
                                    <p>yourwebsite.com</p>
                                </Col>
                                <Col lg='5' className='p-5 text-white fs-4'>
                                    <p>Sector A XYZ, Punjab India ZipCode-140008</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg='3' className='p-5'>
                                    <p className='text-secondary'>Billed To</p>
                                    <h4>ClientName</h4>
                                    <p>ClientAddress</p>
                                    <p>City, State ZipCode</p>
                                </Col>
                                <Col lg='4' className='p-5'>
                                    <p className='text-secondary'>Invoice Number</p>
                                    <h4>0000</h4>

                                    <p className='text-secondary'>Date of Issue</p>
                                    <h4>01/01/2023</h4>
                                </Col>
                                <Col lg='5' className='p-5'>
                                    <p className='text-secondary'>Invoice Total</p>
                                    <h4>4200.45</h4>
                                </Col>
                            </Row>
                            <Row>
                                <Col className='px-5'>
                                    <Table>
                                        <thead>
                                            <tr>
                                                <th>Description</th>
                                                <th>Unit Cost</th>
                                                <th>Quantity</th>
                                                <th>Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>ProductName</td>
                                                <td>1000</td>
                                                <td>1</td>
                                                <td>1000</td>
                                            </tr>
                                            <tr>
                                                <td>ProductName</td>
                                                <td>1000</td>
                                                <td>1</td>
                                                <td>1000</td>
                                            </tr>
                                            <tr>
                                                <td>ProductName</td>
                                                <td>1000</td>
                                                <td>1</td>
                                                <td>1000</td>
                                            </tr>
                                            <tr>
                                                <td>ProductName</td>
                                                <td>1000</td>
                                                <td>1</td>
                                                <td>1000</td>
                                            </tr>
                                        </tbody>
                                    </Table>


                                    <Table className='my-5 table-borderless me-5 text-end'>
                                        <tr>
                                            <td width="25%"></td>
                                            <td width="25%"></td>
                                            <td width="25%" className='text-primary'>Subtotal</td>
                                            <td width="25%" className='text-start px-5'>4000</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td className='text-primary'>tax</td>
                                            <td className='text-start px-5'>200.45</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td className='text-primary'>Total</td>
                                            <td className='text-start px-5'>4200.45</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td className='text-primary'>Amount Due</td>
                                            <td className='text-start px-5'>4200.45</td>
                                        </tr>
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

export default InvoicePage
