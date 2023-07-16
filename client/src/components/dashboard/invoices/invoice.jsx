import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminNavbar from '../adminNavbar'
import Table from 'react-bootstrap/Table';
import {orderObject} from '../../dataset'
import InvoicePage from './invoicepage';


const Invoice = () => {
  return (
    <>
      <Container fluid>
        <Row>
            <AdminNavbar />
            <Col>
            <InvoicePage />
            </Col>
        </Row>
      </Container>
    </>
  )
}

export default Invoice
