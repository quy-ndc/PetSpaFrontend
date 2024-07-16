import React from "react";
import "../../../AdminDashboardMainContent/AdminAccountManagement/AccountTable/CreateForm/admin-account-create-form.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  name: Yup.string().trim().required("Name cannot be empty"),
  gender: Yup.string().required("Status cannot be empty"),
});

interface UserCreateFormProps {
  method: string;
  name?: string;
  status?: string;
}

const AdminShelterCreateForm: React.FC<UserCreateFormProps> = ({
  method = "",
  name = "",
  status = "",
}) => {
  return (
    <>
      <Formik
        initialValues={{
          name,
          status,
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form
            className="admin-account-create-form"
            onClick={(e) => e.stopPropagation()}
          >
            {method.toLowerCase() == "update" ? (
              <h1>Edit shelter</h1>
            ) : (
              <h1>Add shelter</h1>
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
                <p>Status</p>
                <Field
                  className="admin-account-create-field"
                  as="select"
                  id="status"
                  name="status"
                >
                  <option value=""></option>
                  <option value="ACTIVE">ACTIVE</option>
                  <option value="INACTIVE">INACTIVE</option>
                </Field>
                <ErrorMessage
                  className="admin-account-create-error"
                  name="status"
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
