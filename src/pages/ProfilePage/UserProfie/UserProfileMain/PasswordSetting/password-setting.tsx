import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "../AccountSetting/account-setting.css"
import api from '../../../../../service/apiService';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignupSchema = Yup.object().shape({
    currentPassword: Yup.string().required('This field is required'),
    password: Yup.string().required('New password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
        .required('Please confirm your password'),
});

const PasswordSetting: React.FC = () => {

    const handleUpdatePassword = async (values: any) => {
        try {
            const response = await api.put(`/user/updatePassword?current_password=${values.currentPassword}&new_password=${values.password}&confirm_password=${values.confirmPassword}`);
            toast.success('Update password successful!');
            if (response.status === 200) {
                setTimeout(() => {
                    window.location.reload();
                }, 1000)
            }
        } catch (err) {
            console.error('Update password error:', err);
        }
    };

    return (
        <>
            <Formik
                enableReinitialize={true}
                initialValues={{
                    currentPassword: '',
                    password: '',
                    confirmPassword: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={(values) => {
                    handleUpdatePassword(values);
                }}
            >
                {() => (
                    <Form className="account-setting-form">
                        <h1>Change password</h1>
                        <div className="account-setting-item">
                            <p>Current Password</p>
                            <Field
                                className="account-setting-field"
                                type="password"
                                id="currentPassword"
                                name="currentPassword"
                            />
                        </div>
                        <div className="account-setting-item">
                            <p>New Password</p>
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
            <ToastContainer />
        </>
    );
}
export default PasswordSetting;