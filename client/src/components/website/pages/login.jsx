import React, { useState, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap';
import { Col, Container, Row } from 'react-bootstrap'
// import { useForm } from 'react-hook-form'

import { useNavigate } from 'react-router-dom';

export default function Login(props) {
    let navigate = useNavigate();
    const intialValues = { email: "", password: "" };

    const [formValues, setFormValues] = useState(intialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const submit = () => {
        console.log(formValues);
    };

    //input change handler
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    //form submission handler
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmitting(true);
    };

    //form validation handler
    const validate = (values) => {
        let errors = {};

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const passwordRegex = /^[A-Za-z0-9_]\w{8,20}$/


        if (!values.email) {
            errors.email = "Cannot be blank";
        } else if (!emailRegex.test(values.email)) {
            errors.email = "Invalid email format";
        }

        if (!values.password) {
            errors.password = "Password cannot be blank";
        } else if (!((values.password).length >= 8 && (values.password).length <= 20)) {
            errors.password = "Password must be of 8 - 20 characters";
        }

        return errors;
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmitting) {
            submit();
        }
    }, [formErrors]);

    return (
        <>
            <Container>
                <Row className='d-flex justify-content-center align-items-center'>
                    <Col lg='6' md='6' sm='12' className='bg-success-subtle text-center my-5 py-5 border-1 rounded-4'>
                        <h1 className='pt-3'>Hello!</h1>
                        <p>Welcome to the Website</p>
                        {/* Formik  */}
                        <Form onSubmit={handleSubmit} noValidate>

                            <Form.Group className="mt-3 mx-5" controlId="loginForm.ControlInput1">
                                <Form.Control type="email" name="email" placeholder="Enter Your email Id" value={formValues.email} onChange={handleChange} className={formErrors.email && "input-error"} />
                                {formErrors.email && (<span className="error text-danger">{formErrors.email}</span>)}
                            </Form.Group>

                            <Form.Group className="mt-3 mx-5" controlId="loginForm.ControlInput2">
                                <Form.Control type="password" name="password" placeholder="Enter Your Password" value={formValues.password} onChange={handleChange} className={formErrors.password && "input-error"} />
                                {formErrors.password && (<span className="error text-danger">{formErrors.password}</span>)} 
                            </Form.Group>
                            
                            <div className='mt-2 mx-5 d-flex justify-content-between'>
                            <Form.Group controlId="loginForm.ControlInput3">
                            <Form.Check
                                inline label="remmeber password"
                                name="group1"
                                type="checkbox"
                                id='checkbox-1' 
                            />
                            </Form.Group>
                            <Form.Group controlId="loginForm.ControlInput4">
                            <Form.Check
                                inline label="Forgot password"
                                name="group1"
                                type="checkbox"
                                id='checkbox-1' 
                            />                         
                            </Form.Group>
                            </div>
                            
                            <Button type="submit" className='bg-white border-0 text-dark my-4 px-5'>SignIn</Button>
                            
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}