import React from 'react'
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
  return (
    <>

      <Col variant='dark' lg="2" md="2" sm="4" xs="4" className=' bg-dark adminsidebar'>
        <h1 className='text-light fw-bolder'><Link to="/dashboard" className='text-decoration-none text-white nav-link'>Dashboard</Link></h1>

        <ul className='navbar-nav pt-5'>
          <li className='nav-item'><Link to="/admin-profile" className='text-decoration-none text-white fs-4 nav-link'>Administrator</Link></li>
          <li className='nav-item'><Link to="/customer" className='text-decoration-none text-white fs-4 nav-link'>Customer</Link></li>
          <li className='nav-item'><Link to="/category" className='text-decoration-none text-white fs-4 nav-link'>Category</Link></li>
          <li className='nav-item'><Link to="/product" className='text-decoration-none text-white fs-4 nav-link'>Products</Link></li>
          <li className='nav-item'><Link to="/invoice" className='text-decoration-none text-white fs-4 nav-link'>Invoice</Link></li>
          <li className='nav-item'><Link to="/review" className='text-decoration-none text-white fs-4 nav-link'>Reviews</Link></li>
        </ul>
      </Col>
    </>
  )
}

export default AdminNavbar
