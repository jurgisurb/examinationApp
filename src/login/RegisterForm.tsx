import React, { useCallback, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { ErrorMessage, Field, Formik } from "formik";
import * as yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event: any) {
        event.preventDefault();
    }

    const validationSchemaProvider = useCallback(() => {
        return yup.object().shape({
            username: yup.string().required("Nurodykite prisijungimo vardą"),
            password: yup.string().required("Nurodykite slaptažodį"),
        });
    }, []);

    const [busy, setBusy] = useState(false);

    return (
        <div className="Register">
            <Formik
                initialValues={{ username: "", password: "" }}
                validationSchema={validationSchemaProvider}
                onSubmit={async (values, { setStatus, setSubmitting }) => {
                    setStatus();
                    console.log(JSON.stringify(values, null, 2));

                    // doLogin(values.username, values.password);
                    setSubmitting(false);
                }}
            >
                {(values) => {
                    const { errors, status, touched, dirty, isSubmitting, setFieldValue, handleSubmit, isValid } = values;
                    return (
                        <Form noValidate translate="yes" onSubmit={handleSubmit}>
                            <div className="username form-group mt-5 mb-0">
                                <Field
                                    name="username"
                                    type="text"
                                    placeholder="Vardas"
                                    className={"form-control" + (errors.username && touched.username ? " is-invalid" : "")}
                                />
                                <ErrorMessage name="username" component="div" className="invalid-feedback" />
                            </div>
                            <div className="username form-group mt-5 mb-0">
                                <Field
                                    name="username"
                                    type="text"
                                    placeholder="Pavarde"
                                    className={"form-control" + (errors.username && touched.username ? " is-invalid" : "")}
                                />
                                <ErrorMessage name="username" component="div" className="invalid-feedback" />
                            </div>
                            <div className="username form-group mt-5 mb-0">
                                <Field
                                    name="username"
                                    type="text"
                                    placeholder="El. paštas"
                                    className={"form-control" + (errors.username && touched.username ? " is-invalid" : "")}
                                />
                                <ErrorMessage name="username" component="div" className="invalid-feedback" />
                            </div>
                            <div className="password form-group">
                                <Field
                                    name="password"
                                    type="password"
                                    placeholder="Slaptažodis"
                                    className={"form-control" + (errors.password && touched.password ? " is-invalid" : "")}
                                />
                                <ErrorMessage name="password" component="div" className="invalid-feedback" />
                            </div>

                            {/* {errorLogin && typeof errorLogin === "string" && <Alert variant="danger">{errorLogin}</Alert>} */}

                            <div className="form-group">
                                <Button
                                    type="button"
                                    variant="primary"
                                    className="btn btn-secondary btn-block"
                                    // disabled={busy || !isValid || userBlocked}
                                    onClick={(values: any) => {
                                        handleSubmit(values);
                                    }}
                                >
                                    {busy && <FontAwesomeIcon icon="spinner" spin />}
                                    {busy ? "Jungiamasi..." : "Registruotis"}
                                </Button>
                            </div>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
}
