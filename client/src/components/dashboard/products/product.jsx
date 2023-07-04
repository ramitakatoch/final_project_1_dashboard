import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminNavbar from '../adminNavbar'
import Table from 'react-bootstrap/Table';
import {productObject} from '../../dataset'


const Product = () => {
  return (
    <>
      <Container fluid>
        <Row>
            <AdminNavbar />
            <Col lg='10' md='10' sm='8' xs='8'> 
                <h1 className='border-bottom'>Product</h1>
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
                        {productObject.map((i,j) => {
                            return (
                                <>
                                    <tr key={i.id}>
                                        <th scope="row">{j+1}</th>
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
    </>
  )
}

export default Product
