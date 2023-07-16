import React, { useState, useEffect } from 'react'
import { Button, Modal, Form } from 'react-bootstrap';
// import { useForm } from 'react-hook-form'

import { useNavigate } from 'react-router-dom';

export default function AddNewProduct(props) {
    let navigate = useNavigate();
    const intialValues = { productName: "", productPrice: "", manufacture: "", quantity: "" };

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

        const productNameRegex = /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i
        const productPriceRegex = /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i
        const manufactureRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const quantityRegex = /^[0]?[6789]\d{9}$/
       

        if (!values.productName) {
            errors.productName = "Product Name cannot be blank";
        } else if (values.productName.length < 1) {
            errors.productName = "Product Name must be more than 1 character";
        } else if (!productNameRegex.test(values.productName)) {
            errors.email = "Invalid Product Name format";
        }

        if (!values.productPrice) {
            errors.productPrice = "Price cannot be blank";
        } else if (!productPriceRegex.test(values.productPrice)) {
            errors.email = "Invalid format";
        }

        if (!values.manufacture) {
            errors.manufacture = "Cannot be blank";
        } else if (!manufactureRegex.test(values.manufacture)) {
            errors.email = "Invalid format";
        }

        if (!values.quantity) {
            errors.quantity = "Cannot be blank";
        } else if (!quantityRegex.test(values.quantity)) {
            errors.email = "Invalid format";
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
            <Modal {...props} size="lg" aria-labelledby="addNewProduct" centered >
                <Modal.Header closeButton>
                    <Modal.Title id="addNewProduct">
                        Add New Product
                    </Modal.Title>
                </Modal.Header>

                <Form onSubmit={handleSubmit} noValidate>
                    <Modal.Body>
                        <Form.Group className="mb-3" controlId="addProduct.ControlInput1">
                            <Form.Label>productName</Form.Label>
                            <Form.Control type="text" name="productName" placeholder="James" value={formValues.productName} onChange={handleChange} className={formErrors.productName && "input-error"} />
                            {formErrors.productNameName && (<span className="error text-danger">{formErrors.productName}</span>)}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="addProduct.ControlInput2">
                            <Form.Label>productPrice</Form.Label>
                            <Form.Control type="text" name="productPrice" placeholder="Bond" value={formValues.productPrice} onChange={handleChange} className={formErrors.productPrice && "input-error"} />
                            {formErrors.productPrice && (<span className="error text-danger">{formErrors.productPrice}</span>)}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="addProduct.ControlInput3">
                            <Form.Label>manufacture</Form.Label>
                            <Form.Control type="email" name="manufacture" placeholder="bajaj" value={formValues.manufacture} onChange={handleChange} className={formErrors.manufacture && "input-error"} />
                            {formErrors.manufacture && (<span className="error text-danger">{formErrors.manufacture}</span>)}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="addProduct.ControlInput4">
                            <Form.Label>quantity</Form.Label>
                            <Form.Control type="text" name="quantity" placeholder="2pc" value={formValues.quantity} onChange={handleChange} className={formErrors.quantity && "input-error"} />
                            {formErrors.quantity && (<span className="error text-danger">{formErrors.quantity}</span>)}
                        </Form.Group>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button type="submit">Submit</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}