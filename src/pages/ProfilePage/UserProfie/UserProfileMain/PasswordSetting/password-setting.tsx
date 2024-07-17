import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "../AccountSetting/account-setting.css"
import api from '../../../../../service/apiService';

const SignupSchema = Yup.object().shape({
    currentPassword: Yup.string().required('This field is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
        .required('Please confirm your password'),
});

const PasswordSetting: React.FC = () => {
    const [currentPassword, setCurrentPassword] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    // const [account, setAccount] = useState<any>();
    // const [loading, setLoading] = useState(true);

    // const fetchCurrentUser = async () => {
    //     try {
    //         const response = await api.get(`user/currentUser/` + sessionStorage.getItem("jwtToken"));
    //         setAccount(response.data);
    //     } catch (error) {
    //         console.error("Error fetching account data:", error);
    //     } finally {
    //         setLoading(false);
    //     }
    // };
    // useEffect(() => {
    //     fetchCurrentUser();
    // }, []);

    const handleUpdatePassword = async () => {
        try {
            const response = await api.post("user/updatePassword?current_password=12345&new_password=123&confirm_password=123");
            console.log('Change password:', response);
            setTimeout(() => {
                window.location.reload;
            }, 2000)
        } catch (err) {
            console.error('Delete pet error:', err);
        }
    };

    const handleCurrentPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentPassword(event.target.value);
    };

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleConfirmPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleUpdatePassword();
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
                    console.log(values);
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