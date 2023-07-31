import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminNavbar from '../adminNavbar'
import Table from 'react-bootstrap/Table';
import { categoryObject } from '../../dataset'
import { AiOutlinePlusCircle } from "react-icons/ai";
import AddNewCategory from './addNewCategory'


const Category = () => {
    const [categoryObject, setcategoryObject] = useState([])
    const [modalShow, setModalShow] = useState(false);

    const getCategoryObject = async ()=>{
        const response = await fetch("http://localhost:5000/api/category").then(
            (response) => response.json()
        )
        setcategoryObject(response)
    }



    useEffect(() => {
        getCategoryObject()
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
                                    <h1 className='border-bottom'>Category</h1>
                                    <button onClick={() => setModalShow(true)}><AiOutlinePlusCircle /> Add New Category</button>

                                    <AddNewCategory show={modalShow} onHide={() => setModalShow(false)} />
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
                                            {categoryObject.map((i, j) => {
                                                return (
                                                    <>
                                                        <tr key={i._id}>
                                                            <th scope="row">{j + 1}</th>
                                                            <td>{i.categoryName}</td>
                                                            <td>{i.createdBy}</td>
                                                            <td>{i.createdOn}</td>
                                                            <td>{(i.status).toString()}</td>
                                                            {/* <td>{i.actions}</td> */}
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

export default Category
