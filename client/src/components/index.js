import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import './style.css'
import { Link } from 'react-router-dom';

const Components = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col className='d-flex align-items-center justify-content-center front-page'>
                        <Link to="/website">
                            <Button variant="success" className='m-2' size="lg">
                                Go To Website
                            </Button>
                        </Link>
                        <Link to="/dashboard">
                            <Button variant="danger" className='m-2' size="lg">
                                Go To Admin
                            </Button>
                        </Link>   
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Components
