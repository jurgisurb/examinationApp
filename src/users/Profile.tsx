import * as yup from "yup";
import React, { useEffect, useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { Button, ButtonGroup, ButtonToolbar, Col, Form, Row } from "react-bootstrap";
import { ErrorMessage, Formik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons/faSpinner";

library.add(faSpinner);

interface Props {
    id: number;
}

export const Profile: React.FC<Props> = ({ id }) => {
    const history = useHistory();

    const [busy, setBusy] = useState(false);

    return (
        <div>
            <Formik validationSchema={[]} initialValues={[]} enableReinitialize={true} onSubmit={(values, formikHelpers) => {}}>
                {({ handleSubmit, handleChange, handleBlur, values, setFieldValue, isSubmitting }) => {
                    return (
                        <Form onSubmit={handleSubmit} className="pt-3">
                            <Row>
                                <Col md="8">
                                    <Form.Label className="mt-2">Prisijungimo vardas</Form.Label>
                                    {id == 0 && (
                                        <>
                                            <Form.Control type="text" name="username" value={[]} onChange={handleChange} onBlur={handleBlur} />
                                            <ErrorMessage className="alert-danger" component="div" name="username" />
                                        </>
                                    )}
                                    {id > 0 && <Form.Control plaintext readOnly value={[]} />}

                                    <Form.Label className="mt-2">Vardas</Form.Label>
                                    <Form.Control type="text" name="name" value={[]} onChange={handleChange} onBlur={handleBlur} />
                                    <ErrorMessage className="alert-danger" component="div" name="name" />

                                    <Form.Label className="mt-2">Pavardė</Form.Label>
                                    <Form.Control type="text" name="surname" value={[]} onChange={handleChange} onBlur={handleBlur} />
                                    <ErrorMessage className="alert-danger" component="div" name="surname" />

                                    <Form.Label className="mt-2">Pareigos</Form.Label>
                                    <Form.Control type="text" name="pareigos" value={[]} onChange={handleChange} onBlur={handleBlur} />
                                    <ErrorMessage className="alert-danger" component="div" name="pareigos" />

                                    <Form.Label className="mt-2">E-mail</Form.Label>
                                    <Form.Control type="text" name="email" value={[]} onChange={handleChange} onBlur={handleBlur} />
                                    <ErrorMessage className="alert-danger" component="div" name="email" />

                                    <Form.Label className="mt-2">Aktyvus</Form.Label>
                                    <Form.Check type="checkbox" name="active" checked={true} onChange={handleChange} onBlur={handleBlur} value={[]} />

                                    <Form.Label className="mt-2">Slaptažodis (palikite tuščią, jei nenorite pakeisti)</Form.Label>
                                    <Form.Control
                                        type="password"
                                        autoComplete="new-password"
                                        name="password"
                                        value={[]}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </Col>
                            </Row>
                            {/*<FormikDebug/>*/}

                            <Row>
                                <Col md="12">
                                    <ButtonToolbar className="justify-content-end mt-3">
                                        <ButtonGroup>
                                            <Button variant="outline-primary" disabled={isSubmitting} type="submit">
                                                Išsaugoti
                                            </Button>
                                        </ButtonGroup>
                                    </ButtonToolbar>
                                </Col>
                            </Row>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
};

export default Profile;
