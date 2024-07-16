import React, { useEffect, useState } from "react";
import "./pet-create-form.css";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import api from "../../../../../../service/apiService";

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
    petid?: string;
    gender?: string;
    age?: string;
    species?: string;
    breed?: string;
}

const UserPetCreateForm: React.FC<UserPetCreateFormProps> = ({
    method = '',
    name = '',
    petid = '',
    gender = '',
    age = '',
    species = '',
    breed = ''
}) => {

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

    const handleUpdatePet = async (petId: string, values: any) => {
        try {
            const response = await api.put(`/pet/update?pet_id=${petId}`, {
                pet_name: values.name,
                age: parseInt(values.age, 10),
                gender: values.gender.toUpperCase(),
                species: values.species.toUpperCase(),
                type_of_species: values.breed || '',
                status: 'ACTIVE'
            });
            console.log('Update pet successful:', response);
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        } catch (err) {
            console.error('Update pet error:', err);
        }
    };

    const handleCreatePet = async (values: any) => {
        try {
            const response = await api.post(`/pet/${account.userId}/create`, {
                pet_name: values.name,
                age: parseInt(values.age, 10),
                gender: values.gender.toUpperCase(),
                species: values.species.toUpperCase(),
                type_of_species: values.breed || '',
                status: 'ACTIVE'
            });
            console.log('Update pet successful:', response);
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        } catch (err) {
            console.error('Update pet error:', err);
        }
    };

    console.log(petid)

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
                    if (method.toLowerCase() === 'update') {
                        //console.log(petid)
                        handleUpdatePet(petid, values);
                    } else {
                        console.log(values)
                        handleCreatePet(values);
                    }
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
                                    <option value="MALE">Male</option>
                                    <option value="FEMALE">Female</option>
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
