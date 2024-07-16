import React, { useEffect, useState } from "react";
import "./account-setting.css";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import api from "../../../../../service/apiService";

const SignupSchema = Yup.object().shape({
    firstName: Yup.string().trim().required('First name cannot be empty').matches(/^[^\d]*$/, 'First name cannot contain numbers'),
    lastName: Yup.string().trim().required('Last name cannot be empty').matches(/^[^\d]*$/, 'Last name cannot contain numbers'),
    email: Yup.string().trim().email('Invalid email').required('Required'),
    phone: Yup.string().required('Phone cannot be empty').matches(/^\d+$/, 'Phone must contain only numbers'),
    age: Yup.string().required('Age cannot be empty').matches(/^\d+$/, 'Age must contain only numbers'),
    gender: Yup.string().required('Gender cannot be empty'),
    address: Yup.string().trim(),
});

const AccountSetting: React.FC = () => {

    const [account, setAccount] = useState<any>();
    const [loading, setLoading] = useState(true);

    const fetchCurrentUser = async () => {
        try {
            const response = await api.get(`user/currentUser/` + sessionStorage.getItem("jwtToken"));
            setAccount(response.data);
        } catch (error) {
            console.error("Error fetching account data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCurrentUser();
    }, []);

    const handleUpdateAccount = async (data: any) => {
        try {
            const email = encodeURIComponent(data.email)
            const response = await api.put(`/user/updateProfile?userId=${account.userId}&user_name=${data.firstName}&address=${data.address}&email=${email}&full_name=${data.firstName + ' ' + data.lastName}&gender=${data.gender}&phone=${data.phone}`);
            console.log('Login successful:', response);
            sessionStorage.setItem('jwtToken', response.data.accessToken);
        } catch (err) {
            console.error('Login error:', err);
        }
    };

    if (loading) {
        return <h1 style={{ color: "black" }}>Loading</h1>;
    }

    return (
        <>
            <Formik
                enableReinitialize={true}
                initialValues={{
                    userName: account ? account.userName : '',
                    firstName: account ? account.userName : '',
                    lastName: account ? account.fullName : '',
                    email: account ? account.email : '',
                    phone: account ? account.phone : '',
                    age: account ? account.age : '',
                    gender: account ? account.gender : '',
                    address: account ? account.address : '',
                }}
                validationSchema={SignupSchema}
                onSubmit={values => {
                    handleUpdateAccount(values)
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
                                    <option selected={account?.gender == "MALE"} value="MALE">Male</option>
                                    <option selected={account?.gender == "FEMALE"} value="FEMALE">Female</option>
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
