import React, { useEffect, useState } from "react";
import "./account-setting.css";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    firstName: Yup.string().required('First name cannot be empty').matches(/^[^\d]*$/, 'First name cannot contain numbers'),
    lastName: Yup.string().required('Last name cannot be empty').matches(/^[^\d]*$/, 'Last name cannot contain numbers'),
    email: Yup.string().email('Invalid email').required('Required'),
    phone: Yup.string().required('Phone cannot be empty').matches(/^\d+$/, 'Phone must contain only numbers'),
    age: Yup.string().required('Age cannot be empty').matches(/^\d+$/, 'Age must contain only numbers'),
    gender: Yup.string().required('Gender cannot be empty'),
    address: Yup.string(),
});

const AccountSetting: React.FC = () => {

    return (
        <>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    age: '',
                    gender: '',
                }}

                validationSchema={SignupSchema}

                onSubmit={values => {
                    console.log(values);
                }}
            >
                {() => (
                    <Form className="account-setting-form">
                        <h1>Account settings</h1>
                        <div className="account-setting-input-fields">
                            <div className="account-setting-item">
                                <p>First name</p>
                                <Field
                                    className="account-setting-field"
                                    name="firstName"
                                    type="text"
                                />
                                <ErrorMessage
                                    className="account-setting-error"
                                    name="firstName"
                                    component="span"
                                />
                            </div>
                            <div className="account-setting-item">
                                <p>Last name</p>
                                <Field
                                    className="account-setting-field"
                                    name="lastName"
                                    type="text"
                                />
                                <ErrorMessage
                                    className="account-setting-error"
                                    name="lastName"
                                    component="span"
                                />
                            </div>
                            <div className="account-setting-item">
                                <p>Phone</p>
                                <Field
                                    className="account-setting-field"
                                    name="phone"
                                    type="text"
                                />
                                <ErrorMessage
                                    className="account-setting-error"
                                    name="phone"
                                    component="span"
                                />
                            </div>
                            <div className="account-setting-item">
                                <p>Email</p>
                                <Field
                                    className="account-setting-field"
                                    name="email"
                                    type="email"
                                />
                                <ErrorMessage
                                    className="account-setting-error"
                                    name="email"
                                    component="span"
                                />
                            </div>
                            <div className="account-setting-item">
                                <p>Age</p>
                                <Field
                                    className="account-setting-field"
                                    name="age"
                                    type="number"
                                />
                                <ErrorMessage
                                    className="account-setting-error"
                                    name="age"
                                    component="span"
                                />
                            </div>
                            <div className="account-setting-item">
                                <p>Gender</p>
                                <Field
                                    className="account-setting-field"
                                    as="select"
                                    id="gender"
                                    name="gender"
                                >
                                    <option value=""></option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </Field>
                                <ErrorMessage
                                    className="account-setting-error"
                                    name="gender"
                                    component="span"
                                />
                            </div>
                            <div className="account-setting-item">
                                <p>Address (optional)</p>
                                <Field
                                    className="account-setting-field"
                                    name="address"
                                    type="text"
                                />
                                <ErrorMessage
                                    className="account-setting-error"
                                    name="address"
                                    component="span"
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="account-save-button"
                        >
                            Save
                        </button>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default AccountSetting;