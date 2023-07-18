import React, { useState, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap';
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
// import { useForm } from 'react-hook-form'

import { useNavigate } from 'react-router-dom';

export default function RegisterForm(props) {
    let navigate = useNavigate();
    const intialValues = { firstName: "", lastName: "", email: "", password: "" };

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

        const firstNameRegex = /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i
        const lastNameRegex = /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const passwordRegex = /^[A-Za-z0-9_]\w{8,20}$/

        if (!values.firstName) {
            errors.firstName = "First Name cannot be blank";
        } else if (values.firstName.length < 1) {
            errors.firstName = "First Name must be more than 1 character";
        } else if (!firstNameRegex.test(values.firstName)) {
            errors.email = "Invalid First Name format";
        }

        if (!values.lastName) {
            errors.lastName = "Last Name cannot be blank";
        } else if (values.lastName.length < 1) {
            errors.lastName = "Last Name must be more than 1 character";
        } else if (!lastNameRegex.test(values.lastName)) {
            errors.email = "Invalid Last Name format";
        }

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
            {/* Formik  */}

            <Container>
                <Row className='d-flex justify-content-center align-items-center'>
                    <Col lg='6' md='6' sm='12' className='bg-success-subtle my-5 py-3 border-1 rounded-4'>
                        <h1 className='pt-3 text-center'>SignUp</h1>
                        {/* Formik  */}
                        <Form onSubmit={handleSubmit} noValidate>

                            <Form.Group className="mt-3 mx-5" controlId="registerForm.ControlInput1">
                                <Form.Label>FirstName</Form.Label>
                                <Form.Control type="text" name="firstName" placeholder="James" value={formValues.firstName} onChange={handleChange} className={formErrors.firstName && "input-error"} />
                                {formErrors.firstName && (<span className="error text-danger">{formErrors.firstName}</span>)}
                            </Form.Group>

                            <Form.Group className="mt-3 mx-5" controlId="registerForm.ControlInput2">
                                <Form.Label>LastName</Form.Label>
                                <Form.Control type="text" name="lastName" placeholder="Bond" value={formValues.lastName} onChange={handleChange} className={formErrors.lastName && "input-error"} />
                                {formErrors.lastName && (<span className="error text-danger">{formErrors.lastName}</span>)}
                            </Form.Group>

                            <Form.Group className="mt-3 mx-5" controlId="registerForm.ControlInput3">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type="email" name="email" placeholder="Enter Your Email" value={formValues.email} onChange={handleChange} className={formErrors.email && "input-error"} />
                                {formErrors.email && (<span className="error text-danger">{formErrors.email}</span>)}
                            </Form.Group>

                            <Form.Group className="mt-3 mx-5" controlId="registerForm.ControlInput3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" placeholder="Enter Your Password" value={formValues.password} onChange={handleChange} className={formErrors.password && "input-error"} />
                                {formErrors.password && (<span className="error text-danger">{formErrors.password}</span>)}
                            </Form.Group>

                            <div className='text-center mt-3'>
                            
                            <Button type="submit" className='border-0 bg-primary text-dark px-5'>Register</Button>

                            <p className='mt-3'>Already a member? <Link to="/website/login">LogIn</Link></p>
                            </div>

                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}