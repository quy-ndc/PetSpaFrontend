import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "../AccountSetting/account-setting.css"

const SignupSchema = Yup.object().shape({
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
        .required('Please confirm your password'),
});

const PasswordSetting: React.FC = () => {

    return (
        <>
            <Formik
                initialValues={{
                    password: '',
                    confirmPassword: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {() => (
                    <Form className="account-setting-form">
                        <h1>Change password</h1>
                        <div className="account-setting-item">
                            <p>Password</p>
                            <Field
                                className="account-setting-field"
                                type="password"
                                id="password"
                                name="password"
                            />
                            <ErrorMessage
                                className="account-setting-error"
                                name="password"
                                component="span"
                            />
                        </div>
                        <div className="account-setting-item">
                            <p>Confirm Password</p>
                            <Field
                                className="account-setting-field"
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                            />
                            <ErrorMessage
                                className="account-setting-error"
                                name="confirmPassword"
                                component="span"
                            />
                        </div>
                        <button
                            type="submit"
                            className="account-save-button"
                        >
                            Update
                        </button>
                    </Form>
                )}
            </Formik >
        </>
    );
}
export default PasswordSetting;
