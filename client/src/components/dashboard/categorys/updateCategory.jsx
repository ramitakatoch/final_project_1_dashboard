import React, { useState, useEffect } from 'react'
import { Button, Modal, Form } from 'react-bootstrap';
import Adminnavbar from './adminnavbar';
import { useNavigate, useParams } from 'react-router-dom';


export default function UpdateCategory(props) {
    const { categoryId } = useParams();
    let navigate = useNavigate();

    // Using Formik
    const intialValues = { categoryName: "", status: "" };
    const [formValues, setFormValues] = useState(intialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const getCategoryIdObject = async (id) => {
        // const response = await fetch(`http://localhost:5000/api/customers?id=${id}`, { mode: 'cors' }).then(
        //     (response) => response.json()
        // )
        // setFormValues(response)
    }

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
        getCategoryIdObject(categoryId)

        if (Object.keys(formErrors).length === 0 && isSubmitting) {
            submit();
        }
    }, [formErrors]);

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 col-lg-2 d-block bg-dark sidebar">
                        <Adminnavbar />
                    </div>

                    <div className="col-md-9 col-lg-10 px-md-4 pt-2">
                        <div className="row">
                            <div className="col-12 d-flex justify-content-between">
                                <h1 className="fs-1">Update Category </h1>
                                <Button className='btn btn-primary' onClick={() => { navigate('/admin/category') }}>Back</Button>
                            </div>
                            <div className="col-12 mt-4">
                                <Form onSubmit={handleSubmit} noValidate>

                                    <Form.Group className="mb-3" controlId="updateCategory.ControlInput1">
                                        <Form.Label>CategoryName</Form.Label>
                                        <Form.Control type="text" name="categoryName" placeholder="James" value={formValues.categoryName} onChange={handleChange} className={formErrors.firstName && "input-error"} />
                                        {formErrors.firstName && (<span className="error text-danger">{formErrors.categoryName}</span>)}
                                    </Form.Group>
                                    <Form.Group className='mb-3' controlId='updateCategory.ControlInput2'>
                                        <Form.Label>Status</Form.Label>
                                        <Form.Check type="radio" label="Active" id="ActiveStatus" />
                                        <Form.Check type="radio" label="InActive" id="InActiveStatus" />
                                    </Form.Group>
                                    <Button type="submit">Submit</Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}