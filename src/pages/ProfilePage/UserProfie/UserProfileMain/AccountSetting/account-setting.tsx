import React, { useEffect, useState } from "react";
import "./account-setting.css";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import api from "../../../../../service/apiService";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignupSchema = Yup.object().shape({
    firstName: Yup.string().trim().required('First name cannot be empty').matches(/^[^\d]*$/, 'First name cannot contain numbers'),
    lastName: Yup.string().trim().required('Last name cannot be empty').matches(/^[^\d]*$/, 'Last name cannot contain numbers'),
    fullName: Yup.string().trim().required('Full name cannot be empty'),
    userName: Yup.string().trim().required('User name cannot be empty').matches(/^[^\d]*$/, 'User name cannot contain numbers'),
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
            console.log(data)
            const email = encodeURIComponent(data.email);
            const response = await api.put(`/user/updateProfile?userId=${account.userId}&user_name=${data.userName}&address=${data.address}&email=${email}&full_name=${data.fullName}&gender=${data.gender}&phone=${data.phone}`);
            toast.success("Update profile successful");
        } catch (err) {
            toast.error("Update profile failed");
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
                    fullName: account ? account.fullName : '',
                    email: account ? account.email : '',
                    phone: account ? account.phone : '',
                    age: account ? account.age : '',
                    gender: account ? account.gender : '',
                    address: account ? account.address : '',
                }}
                validationSchema={SignupSchema}
                onSubmit={values => {
                 //   console.log(values);
                    handleUpdateAccount(values)
                }}
            >
                {() => (
                    <Form className="account-setting-form">
                        <h1>Account settings</h1>
                        <div className="account-setting-input-fields">
                            <div className="account-setting-item">
                                <p>User name</p>
                                <Field
                                    className="account-setting-field"
                                    name="userName"
                                    type="text"
                                />
                                <ErrorMessage
                                    className="account-setting-error"
                                    name="userName"
                                    component="span"
                                />
                            </div>
                            <div className="account-setting-item">
                                <p>Full name</p>
                                <Field
                                    className="account-setting-field"
                                    name="fullName"
                                    type="text"
                                />
                                <ErrorMessage
                                    className="account-setting-error"
                                    name="fullName"
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
            <ToastContainer />
        </>
    );
};

export default AccountSetting;
