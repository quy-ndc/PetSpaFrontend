import React from "react";
import '../../../AdminAccountManagement/AccountTable/CreateForm/admin-account-create-form.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    firstName: Yup.string().trim().required('First name cannot be empty').matches(/^[^\d]*$/, 'First name cannot contain numbers'),
    lastName: Yup.string().trim().required('Last name cannot be empty').matches(/^[^\d]*$/, 'Last name cannot contain numbers'),
    email: Yup.string().trim().email('Invalid email').required('Required'),
    phone: Yup.string().required('Phone cannot be empty').matches(/^\d+$/, 'Phone must contain only numbers'),
    age: Yup.string().required('Age cannot be empty').matches(/^\d+$/, 'Age must contain only numbers'),
    gender: Yup.string().required('Gender cannot be empty'),
    address: Yup.string().trim(),
});

interface UserCreateFormProps {
    method: string;
    name?: string;
    type?: string[];
    price?: string;
    discount?: string;
}

const AdminServiceCreateForm: React.FC<UserCreateFormProps> = ({
    method = '',
    name = '',
    type = '',
    price = '',
    discount = '',
}) => {
    return (
        <>
            <Formik
                initialValues={{
                    name,
                    type,
                    price,
                    discount,
                }}
                validationSchema={SignupSchema}
                onSubmit={values => {
                    console.log(values);
                }}
            >
                {() => (
                    <Form className="admin-account-create-form" onClick={(e) => e.stopPropagation()}>
                        {method.toLowerCase() == "update" ? (
                            <h1>Edit service</h1>
                        ) : (
                            <h1>Add service</h1>
                        )}
                        <div className="admin-account-create-input-fields">
                            <div className="admin-account-create-item">
                                <p>Name</p>
                                <Field
                                    className="admin-account-create-field"
                                    name="name"
                                    type="text"
                                />
                                <ErrorMessage
                                    className="admin-account-create-error"
                                    name="name"
                                    component="span"
                                />
                            </div>
                            <div className="admin-account-create-item">
                                <p>Type</p>
                                <Field
                                    className="admin-account-create-field"
                                    as="select"
                                    id="type"
                                    name="type"
                                >
                                    <option value=""></option>
                                    <option value="male">Holistic</option>
                                    <option value="female">Surgical</option>
                                    <option value="female">Grooming</option>
                                    <option value="female">Clinical</option>
                                </Field>
                                <ErrorMessage
                                    className="admin-account-create-error"
                                    name="type"
                                    component="span"
                                />
                            </div>
                            <div className="admin-account-create-item">
                                <p>Price</p>
                                <Field
                                    className="admin-account-create-field"
                                    name="price"
                                    type="number"
                                />
                                <ErrorMessage
                                    className="admin-account-create-error"
                                    name="price"
                                    component="span"
                                />
                            </div>
                            <div className="admin-account-create-item">
                                <p>Discount</p>
                                <Field
                                    className="admin-account-create-field"
                                    name="discount"
                                    type="number"
                                />
                                <ErrorMessage
                                    className="admin-account-create-error"
                                    name="discount"
                                    component="span"
                                />
                            </div>
                        </div>
                        {method.toLowerCase() == "update" ? (
                            <button
                                type="submit"
                                className="admin-account-create-save-button"
                            >
                                Update
                            </button>
                        ) : (
                            <button
                                type="submit"
                                className="admin-account-create-save-button"
                            >
                                Add
                            </button>
                        )}
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default AdminServiceCreateForm;
