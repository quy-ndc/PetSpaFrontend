import React, { useEffect, useState } from "react";
import '../../../AdminAccountManagement/AccountTable/CreateForm/admin-account-create-form.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import api from "../../../../../../service/apiService";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignupSchema = Yup.object().shape({
    name: Yup.string().trim().required('Service name cannot be empty'),
    description: Yup.string().trim().required('Description cannot be empty'),
    type: Yup.string().trim().required('Type cannot be empty'),
    price: Yup.string().required('Price cannot be empty').matches(/^\d+$/, 'Price must contain only numbers'),
    discount: Yup.string().required('Discount cannot be empty').matches(/^\d+$/, 'Discount must contain only numbers'),
});

interface UserCreateFormProps {
    method: string;
    serviceId?: string;
    name?: string;
    type?: string;
    description?: string;
    price?: string;
    discount?: string;
}

const AdminServiceCreateForm: React.FC<UserCreateFormProps> = ({
    method = '',
    serviceId = '',
    name = '',
    type = '',
    description = '',
    price = '',
    discount = '',
}) => {

    const [serviceTypes, setServiceTypes] = useState<any[]>([])
    const [loading, setLoading] = useState(true);

    const fetchTypeData = async () => {
        try {
            const response = await api.get(`/type/getAll`);
            setServiceTypes(response.data);
        } catch (error) {
            console.error("Error fetching account data:", error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchTypeData();
    }, []);

    const handleCreateService = async (values: any, typeId: any) => {
        try {
            const response = await api.post(`/service/save/${typeId}`, values);
            toast.success('Create service successful!');
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        } catch (err) {
            toast.error('Create service failed!');
        }
    };

    const handleUpdateService = async (values: any, typeId: any) => {
        try {
            const response = await api.post(`/service/save/${typeId}`, values);
            toast.success('Update service successful!');
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        } catch (err) {
            toast.error('Update service failed!');
        }
    };

    if (loading) {
        return <h1 style={{ color: "black" }}>LOADING</h1>
    }


    return (
        <>
            <Formik
                initialValues={{
                    serviceId,
                    name,
                    type,
                    description,
                    price,
                    discount,
                }}
                validationSchema={SignupSchema}
                onSubmit={values => {
                    if (method.toLowerCase() === 'update') {
                        const serviceToCreate = {
                            serviceId: values.serviceId,
                            serviceName: values.name,
                            description: values.description,
                            price: values.price,
                            discountPercent: values.discount,
                            status: "ACTIVE"
                        }
                        handleUpdateService(serviceToCreate, values.serviceId);
                    } else {
                        const serviceToCreate = {
                            serviceName: values.name,
                            description: values.description,
                            price: values.price,
                            discountPercent: values.discount,
                            status: "ACTIVE"
                        }
                        handleCreateService(serviceToCreate, values.type);
                    }
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
                                <p>Type</p>
                                <Field
                                    className="admin-account-create-field"
                                    as="select"
                                    id="type"
                                    name="type"
                                >
                                    <option value=""></option>
                                    {serviceTypes.map((serviceType) => (
                                        <option key={serviceType.serviceTypeId} value={serviceType.serviceTypeId}>{serviceType.typeName}</option>
                                    ))}
                                </Field>
                                <ErrorMessage
                                    className="admin-account-create-error"
                                    name="type"
                                    component="span"
                                />
                            </div>
                            <div className="admin-account-create-item">
                                <p>Description</p>
                                <Field
                                    className="admin-account-create-field"
                                    name="description"
                                    type="text"
                                />
                                <ErrorMessage
                                    className="admin-account-create-error"
                                    name="description"
                                    component="span"
                                />
                            </div>
                            <div className="admin-account-create-item">
                                <p>Price</p>
                                <Field
                                    className="admin-account-create-field"
                                    name="price"
                                    type="number"
                                />
                                <ErrorMessage
                                    className="admin-account-create-error"
                                    name="price"
                                    component="span"
                                />
                            </div>
                            <div className="admin-account-create-item">
                                <p>Discount</p>
                                <Field
                                    className="admin-account-create-field"
                                    name="discount"
                                    type="number"
                                />
                                <ErrorMessage
                                    className="admin-account-create-error"
                                    name="discount"
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

export default AdminServiceCreateForm;
