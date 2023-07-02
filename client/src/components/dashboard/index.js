import React from 'react'
import { Container, Row } from 'react-bootstrap'
import AdminNavbar from './adminNavbar'

import './styledashboard.scss'
import AdminDashboard from './adminDashboard'


const Dashboard = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <AdminNavbar />
          <AdminDashboard />
        </Row>
      </Container>
    </>
  )
}

export default Dashboard
