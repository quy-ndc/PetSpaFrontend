import React from "react";
import '../../../AdminDashboardMainContent/AdminAccountManagement/AccountTable/CreateForm/admin-account-create-form.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    name: Yup.string().trim().required('Name cannot be empty'),
    capacity: Yup.string().required('Age cannot be empty').matches(/^\d+$/, 'Age must contain only numbers'),
});

interface UserCreateFormProps {
    method: string;
    name?: string;
    capacity?: string;
}

const AdminShelterCreateForm: React.FC<UserCreateFormProps> = ({
    method = '',
    name = '',
    capacity = '',
}) => {
    return (
        <>
            <Formik
                initialValues={{
                    name,
                    capacity,
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
                                <p>Capacity</p>
                                <Field
                                    className="admin-account-create-field"
                                    name="capacity"
                                    type="number"
                                />
                                <ErrorMessage
                                    className="admin-account-create-error"
                                    name="capacity"
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

export default AdminShelterCreateForm;
