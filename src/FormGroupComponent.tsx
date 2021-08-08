import React from "react";
import { useTranslation } from "react-i18next";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface Props {
    label?: string;
    className?: string;
    labelClassName?: string;
    hideLabel?: boolean;
}

export const FormGroupComponent: React.FC<Props> = ({ label, children, className, hideLabel, labelClassName }) => {
    const { t } = useTranslation();

    return (
        <Form.Group as={Col} className={className}>
            {!hideLabel && <Form.Label className={labelClassName}>{label ? t(label) : ""}</Form.Label>}
            {children}
        </Form.Group>
    );
};

export default FormGroupComponent;
