import React, { useCallback } from "react";
import "antd/dist/antd.css";
import { Form, Modal, Button, Row } from "react-bootstrap";
import { Grid, Input } from "@material-ui/core";
import { ErrorMessage, Field, Formik } from "formik";
import * as yup from "yup";
import { useHistory } from "react-router-dom";

interface ModalProps {
    path: string;
    examName: string;
    hide(): void;
}

export const PreExamForm: React.FC<ModalProps> = ({ path, hide, examName }) => {
    const validationSchemaProvider = useCallback(() => {
        return yup.object().shape({
            firstname: yup.string().required("Nurodykite vardą").min(4),
            surname: yup.string().required("Nurodykite pavardę").min(4),
            email: yup.string().required("Nurodykite el. paštą").email(),
        });
    }, []);

    let history = useHistory();
    var today = new Date().toLocaleString();

    const hoursMinSecs = { hours: 1, minutes: 30, seconds: 0 };

    return (
        <div className="App">
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <h1>Užpildykite formą norėdami pradėti egzaminą</h1>
                    <Formik
                        initialValues={{ firstname: "", surname: "", email: "" }}
                        validationSchema={validationSchemaProvider}
                        onSubmit={(values) => {
                            console.log("val", values);

                            history.push(path, { values, examName: examName, time: today, state: "Vyksta", timer: hoursMinSecs });
                        }}
                    >
                        {({ values, handleChange, isValid, handleSubmit, setFieldValue, resetForm, errors }) => {
                            return (
                                <Form>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={12}>
                                            <Field name="firstname" type="text" placeholder="Vardas" />
                                            <ErrorMessage name="firstname">{(msg) => <div style={{ color: "red" }}>{msg}</div>}</ErrorMessage>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={12}>
                                            <Field name="surname" type="text" placeholder="Pavardė" />
                                            <ErrorMessage name="surname">{(msg) => <div style={{ color: "red" }}>{msg}</div>}</ErrorMessage>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={12}>
                                            <Field name="email" type="email" placeholder="El. paštas" />
                                            <ErrorMessage name="email">{(msg) => <div style={{ color: "red" }}>{msg}</div>}</ErrorMessage>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={12}>
                                            <Button
                                                onClick={() => {
                                                    hide();
                                                }}
                                                variant="primary"
                                            >
                                                Atšaukti
                                            </Button>
                                            <Button
                                                onClick={() => {
                                                    handleSubmit();
                                                }}
                                                variant="primary"
                                            >
                                                Pradėti egzaminą
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Form>
                            );
                        }}
                    </Formik>
                </Grid>
            </Grid>
        </div>
    );
};
