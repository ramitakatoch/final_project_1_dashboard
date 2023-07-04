import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminNavbar from '../adminNavbar'
import Table from 'react-bootstrap/Table';
import {categoryObject} from '../../dataset'


const Category = () => {
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
                        <th>categoryName</th>
                        <th>createdBy</th>
                        <th>createdOn</th>
                        <th>status</th>
                        <th>actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categoryObject.map((i,j) => {
                            return (
                                <>
                                    <tr key={i.id}>
                                        <th scope="row">{j+1}</th>
                                        <td>{i.categoryName}</td>
                                        <td>{i.createdBy}</td>
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
    </>
  )
}

export default Category
