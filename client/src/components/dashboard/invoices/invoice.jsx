import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminNavbar from '../adminNavbar'
import Table from 'react-bootstrap/Table';
import {orderObject} from '../../dataset'


const Invoice = () => {
  return (
    <>
      <Container fluid>
        <Row>
            <AdminNavbar />
            <Col lg='10' md='10' sm='8' xs='8'> 
                <h1 className='border-bottom'>Invoice</h1>
                <hr />  
                <Table striped hover responsive>
                    <thead>
                        <tr>
                        <th>S.No</th>
                        <th>customerId</th>
                        <th>productId</th>
                        <th>quantity</th>
                        <th>orderedOn</th>
                        <th>transactionId</th>
                        <th>actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderObject.map((i,j) => {
                            return (
                                <>
                                    <tr key={i.id}>
                                        <th scope="row">{j+1}</th>
                                        <td>{i.customerId}</td>
                                        <td>{i.productId}</td>
                                        <td>{i.quantity}</td>
                                        <td>{i.orderedOn}</td>
                                        <td>{i.transactionId}</td>
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
    </>
  )
}

export default Invoice
