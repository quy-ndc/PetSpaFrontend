import React from "react";
import './admin-account-create-form.css'
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
    firstName?: string;
    lastName?: string;
    email?: string;
    age?: string;
    gender?: string;
    address?: string;
    phone?: string;
}

const AdminAccountCreateForm: React.FC<UserCreateFormProps> = ({
    method = '',
    firstName = '',
    lastName = '',
    email = '',
    age = '',
    gender = '',
    address = '',
    phone = ''
}) => {
    return (
        <>
            <Formik
                initialValues={{
                    firstName,
                    lastName,
                    email,
                    age,
                    gender,
                    address,
                    phone
                }}
                validationSchema={SignupSchema}
                onSubmit={values => {
                    console.log(values);
                }}
            >
                {() => (
                    <Form className="admin-account-create-form" onClick={(e) => e.stopPropagation()}>
                        {method.toLowerCase() == "update" ? (
                            <h1>Edit account</h1>
                        ) : (
                            <h1>Add account</h1>
                        )}
                        <div className="admin-account-create-input-fields">
                            <div className="admin-account-create-item">
                                <p>First name</p>
                                <Field
                                    className="admin-account-create-field"
                                    name="firstName"
                                    type="text"
                                />
                                <ErrorMessage
                                    className="admin-account-create-error"
                                    name="firstName"
                                    component="span"
                                />
                            </div>
                            <div className="admin-account-create-item">
                                <p>Last name</p>
                                <Field
                                    className="admin-account-create-field"
                                    name="lastName"
                                    type="text"
                                />
                                <ErrorMessage
                                    className="admin-account-create-error"
                                    name="lastName"
                                    component="span"
                                />
                            </div>
                            <div className="admin-account-create-item">
                                <p>Phone</p>
                                <Field
                                    className="admin-account-create-field"
                                    name="phone"
                                    type="text"
                                />
                                <ErrorMessage
                                    className="admin-account-create-error"
                                    name="phone"
                                    component="span"
                                />
                            </div>
                            <div className="admin-account-create-item">
                                <p>Email</p>
                                <Field
                                    className="admin-account-create-field"
                                    name="email"
                                    type="email"
                                />
                                <ErrorMessage
                                    className="admin-account-create-error"
                                    name="email"
                                    component="span"
                                />
                            </div>
                            <div className="admin-account-create-item">
                                <p>Age</p>
                                <Field
                                    className="admin-account-create-field"
                                    name="age"
                                    type="number"
                                />
                                <ErrorMessage
                                    className="admin-account-create-error"
                                    name="age"
                                    component="span"
                                />
                            </div>
                            <div className="admin-account-create-item">
                                <p>Gender</p>
                                <Field
                                    className="admin-account-create-field"
                                    as="select"
                                    id="gender"
                                    name="gender"
                                >
                                    <option value=""></option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </Field>
                                <ErrorMessage
                                    className="admin-account-create-error"
                                    name="gender"
                                    component="span"
                                />
                            </div>
                            <div className="admin-account-create-item">
                                <p>Address (optional)</p>
                                <Field
                                    className="admin-account-create-field"
                                    name="address"
                                    type="text"
                                />
                                <ErrorMessage
                                    className="admin-account-create-error"
                                    name="address"
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

export default AdminAccountCreateForm;
