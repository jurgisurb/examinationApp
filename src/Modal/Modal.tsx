import { render } from "@testing-library/react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./ModalStyle.css";

export function ActionModal() {
    const [show, setShow] = useState(false);

    return (
        <>
            <Button variant="primary" onClick={() => setShow(true)}>
                Custom Width Modal
            </Button>

            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Custom Modal Styling</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p></p>
                </Modal.Body>
            </Modal>
        </>
    );
}

render(<ActionModal />);
