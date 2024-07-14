import React from "react";
import "./pet-create-form.css";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    name: Yup.string().trim().required('Name cannot be empty'),
    gender: Yup.string().required('Gender cannot be empty'),
    age: Yup.string().required('Age cannot be empty').matches(/^\d+$/, 'Age must contain only numbers'),
    species: Yup.string().required('Species cannot be empty').matches(/^[^\d]*$/, 'Species cannot contain numbers'),
    breed: Yup.string().matches(/^[^\d]*$/, 'Breed cannot contain numbers'),
});

interface UserPetCreateFormProps {
    method: string;
    name?: string;
    gender?: string;
    age?: string;
    species?: string;
    breed?: string;
}

const UserPetCreateForm: React.FC<UserPetCreateFormProps> = ({
    method = '',
    name = '',
    gender = '',
    age = '',
    species = '',
    breed = ''
}) => {
    return (
        <>
            <Formik
                initialValues={{
                    name,
                    gender,
                    age,
                    species,
                    breed,
                }}
                validationSchema={SignupSchema}
                onSubmit={values => {
                    console.log(values);
                }}
            >
                {() => (
                    <Form className="pet-create-form" onClick={(e) => e.stopPropagation()}>
                        <h1>{name ? 'Edit Pet' : 'Add New Pet'}</h1>
                        <div className="pet-create-input-fields">
                            <div className="pet-create-item">
                                <p>Name</p>
                                <Field
                                    className="pet-create-field"
                                    name="name"
                                    type="text"
                                />
                                <ErrorMessage
                                    className="pet-create-error"
                                    name="name"
                                    component="span"
                                />
                            </div>
                            <div className="pet-create-item">
                                <p>Gender</p>
                                <Field
                                    className="pet-create-field"
                                    as="select"
                                    id="gender"
                                    name="gender"
                                >
                                    <option value=""></option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </Field>
                                <ErrorMessage
                                    className="pet-create-error"
                                    name="gender"
                                    component="span"
                                />
                            </div>
                            <div className="pet-create-item">
                                <p>Age</p>
                                <Field
                                    className="pet-create-field"
                                    name="age"
                                    type="number"
                                />
                                <ErrorMessage
                                    className="pet-create-error"
                                    name="age"
                                    component="span"
                                />
                            </div>
                            <div className="pet-create-item">
                                <p>Species</p>
                                <Field
                                    className="pet-create-field"
                                    name="species"
                                    type="text"
                                />
                                <ErrorMessage
                                    className="pet-create-error"
                                    name="species"
                                    component="span"
                                />
                            </div>
                            <div className="pet-create-item">
                                <p>Breed (optional)</p>
                                <Field
                                    className="pet-create-field"
                                    name="breed"
                                    type="text"
                                />
                                <ErrorMessage
                                    className="pet-create-error"
                                    name="breed"
                                    component="span"
                                />
                            </div>
                        </div>
                        {method.toLowerCase() == "update" ? (
                            <button
                                type="submit"
                                className="account-save-button"
                            >
                                Update
                            </button>
                        ) : (
                            <button
                                type="submit"
                                className="account-save-button"
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

export default UserPetCreateForm;
