import React, { useState, useEffect } from 'react'
import { Button, Modal, Form, FormGroup } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';

export default function AddNewCategory(props) {
    let navigate = useNavigate();
    const intialValues = { categoryName: "", status: "" };

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

        const categoryNameRegex = /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i
       
        if (!values.categoryName) {
            errors.categoryName = "Category Name cannot be blank";
        } else if (values.categoryName.length < 1) {
            errors.categoryName = "Category Name must be more than 1 character";
        } else if (!categoryNameRegex.test(values.categoryName)) {
            errors.email = "Invalid Name format";
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
            <Modal {...props} size="lg" aria-labelledby="addNewCategory" centered >
                <Modal.Header closeButton>
                    <Modal.Title id="addNewCategory">
                        Add New Category
                    </Modal.Title>
                </Modal.Header>

                <Form onSubmit={handleSubmit} noValidate>
                    <Modal.Body>
                        <Form.Group className="mb-3" controlId="addCategory.ControlInput1">
                            <Form.Label>CategoryName</Form.Label>
                            <Form.Control type="text" name="categoryName" placeholder="James" value={formValues.categoryName} onChange={handleChange} className={formErrors.firstName && "input-error"} />
                            {formErrors.firstName && (<span className="error text-danger">{formErrors.categoryName}</span>)}
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='addCategory.ControlInput2'>
                            <Form.Label>Status</Form.Label>
                            <Form.Check type="radio" label="Active" id="ActiveStatus" />
                            <Form.Check type="radio" label="InActive" id="InActiveStatus" />
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