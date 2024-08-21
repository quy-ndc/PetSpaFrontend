import React from "react";
import './admin-account-create-form.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import api from "../../../../../../service/apiService";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import bcrypt from 'bcryptjs';

const SignupSchema = Yup.object().shape({
    fullName: Yup.string().trim().required('Full name cannot be empty').matches(/^[^\d]*$/, 'Full name cannot contain numbers'),
    userName: Yup.string().trim().required('User name cannot be empty').matches(/^[^\d]*$/, 'User name cannot contain numbers'),
    email: Yup.string().trim().email('Invalid email').required('Required'),
    phone: Yup.string().required('Phone cannot be empty').matches(/^\d+$/, 'Phone must contain only numbers'),
    age: Yup.string().required('Age cannot be empty').matches(/^\d+$/, 'Age must contain only numbers'),
    gender: Yup.string().required('Gender cannot be empty'),
    address: Yup.string().trim(),
    role: Yup.string().required('Role cannot be empty'),
});

interface UserCreateFormProps {
    method: string;
    userId?: string;
    fullName?: string;
    userName?: string;
    email?: string;
    age?: string;
    gender?: string;
    address?: string;
    phone?: string;
    role?: string;
}

const AdminAccountCreateForm: React.FC<UserCreateFormProps> = ({
    method = '',
    userId = '',
    fullName = '',
    userName = '',
    email = '',
    age = '',
    gender = '',
    address = '',
    phone = '',
    role = '',
}) => {

    const handleCreateAccount = async (values: any) => {
        try {
            const response = await api.post(`/user/save`, values);
            if (response) {
                toast.success('Create account successful!');
            }
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        } catch (err) {
            toast.error('Create account failed!');
        }
    };

    const handleUpdateAccount = async (values: any) => {
        try {
            console.log(values)
            const response = await api.put(`/user/updateProfile?userId=${values.userId}&user_name=${values.userName}&address=${values.address}&email=${values.email}&full_name=${values.fullName}&gender=${values.gender}&phone=${values.phone}`);
            toast.success('Update account successful!');
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        } catch (err) {
            toast.error('Update account failed!');
        }
    };

    const hashPassword = async (password: string): Promise<string> => {
        const saltRounds = 10;
        try {
            const salt = await bcrypt.genSalt(saltRounds);
            const hash = await bcrypt.hash(password, salt);
            return hash;
        } catch (error) {
            throw error;
        }
    };


    const getHashedPassword = (password: string): void => {
        hashPassword(password)
            .then(hashedPassword => {
                console.log(hashedPassword); // The hashed password string
            })
            .catch(error => {
                console.error("Error hashing password:", error);
            });
    };

    return (
        <>
            <Formik
                initialValues={{
                    userId,
                    fullName,
                    userName,
                    email,
                    age,
                    gender,
                    address,
                    phone,
                    role,
                }}
                validationSchema={SignupSchema}
                onSubmit={values => {
                    if (method.toLowerCase() === 'update') {
                        console.log(`user/updateProfile?userId=${values.userId}&user_name=${values.userName}&address=${values.address}&email=${values.email}&full_name=${values.fullName}&gender=${values.gender}&phone=${values.phone}`)
                        handleUpdateAccount(values);
                    } else {
                        const accountPassword = getHashedPassword("1234");

                        const newUser = {
                            userName: values.userName,
                            email: values.email,
                            password: "1234",
                            fullName: values.fullName,
                            age: values.age,
                            gender: values.gender,
                            address: values.address,
                            phone: values.phone,
                            create_date: (new Date).toISOString(),
                            status: "ACTIVE",
                            role: {
                                roleId: values.role == 'admin' ? 1 : values.role == 'staff' ? 2 : values.role == 'customer' ? 3 : 4,
                                roleName: values.role,
                                status: "ACTIVE"
                            }
                        }
                        //console.log(accountPassword)
                        handleCreateAccount(newUser);
                    }
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
                                <p>Full name</p>
                                <Field
                                    className="admin-account-create-field"
                                    name="fullName"
                                    type="text"
                                    placeholder="Enter email"
                                />
                                <ErrorMessage
                                    className="admin-account-create-error"
                                    name="fullName"
                                    component="span"
                                />
                            </div>
                            <div className="admin-account-create-item">
                                <p>Username</p>
                                <Field
                                    className="admin-account-create-field"
                                    name="userName"
                                    type="text"
                                />
                                <ErrorMessage
                                    className="admin-account-create-error"
                                    name="userName"
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
                                    <option selected={gender == "MALE"} value="MALE">Male</option>
                                    <option selected={gender == "MALE"} value="FEMALE">Female</option>
                                </Field>
                                <ErrorMessage
                                    className="admin-account-create-error"
                                    name="gender"
                                    component="span"
                                />
                            </div>
                            <div className="admin-account-create-item">
                                <p>Role</p>
                                <Field
                                    className="admin-account-create-field"
                                    as="select"
                                    id="role"
                                    name="role"
                                >
                                    <option value=""></option>
                                    <option selected={role == "admin"} value="admin">Admin</option>
                                    <option selected={role == "staff"} value="staff">Staff</option>
                                    <option selected={role == "doctor"} value="doctor">Doctor</option>
                                    <option selected={role == "customer"} value="customer">Customer</option>
                                </Field>
                                <ErrorMessage
                                    className="admin-account-create-error"
                                    name="role"
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
            <ToastContainer />
        </>
    );
};

export default AdminAccountCreateForm;
