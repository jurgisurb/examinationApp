import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";
import OpenIcon from "@material-ui/icons/OpenInNew";
import { ExamsItems } from "../resource/dto";
import { Button, Modal, Form } from "react-bootstrap";
import { Formik } from "formik";
import FormGroupComponent from "../FormGroupComponent";
import { PreExamForm } from "./PreExamForm";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: 900,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
}));

const data = [
    { name: "Informatikos egzaminas", path: "/exam" },
    { name: "Matematikos egzaminas", path: "/exam" },
    { name: "Fizikos egzaminas", path: "/exam" },
];

export default function Exams() {
    const classes = useStyles();
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    const [showModal, setShowModal] = useState(false);
    const [path, setPath] = useState("");
    const [examName, setExamName] = useState("");

    return (
        <Grid container spacing={2} md={12}>
            <Grid item xs={12} md={4}>
                <Typography variant="h6" className={classes.title}>
                    Egzaminų sąrašas
                </Typography>
                <div className={classes.demo}>
                    {data.map((d) => (
                        <>
                            <List dense={dense}>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <FolderIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={d.name} secondary={secondary ? "Secondary text" : null} />
                                    <ListItemSecondaryAction>
                                        <IconButton
                                            edge="end"
                                            aria-label="open"
                                            onClick={() => {
                                                console.log("path", d.path);
                                                setShowModal(true);
                                                setPath(d.path);
                                                setExamName(d.name);
                                            }}
                                        >
                                            <OpenIcon />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            </List>
                        </>
                    ))}
                </div>
            </Grid>
            <Grid item xs={12} md={8}>
                <Typography variant="h6" className={classes.title}></Typography>
                {showModal && (
                    <PreExamForm
                        hide={() => {
                            setShowModal(false);
                        }}
                        path={path}
                        examName={examName}
                    />
                    // <ExamsActionModal hide={() => setShowModal(false)}
                    //  submit={() => {}} modalTitle="Paraiškos priėmimas" busy={busy} />
                )}
            </Grid>
        </Grid>
    );
}

interface ModalProps {
    modalTitle: string;
    hide(): void;
    submit(): void;
    busy: boolean;
}

const ExamsActionModal: React.FC<ModalProps> = ({ modalTitle, hide, submit, busy }) => {
    // const validationSchemaProvider = useCallback(() => {
    //     setValidationSchemaLocale(t);

    //     return yup.object<L01ParaiskaActionFormValues>({
    //         vykdytojoKomentaras: yup.string().required(),
    //     });
    // }, [t]);

    return (
        <Modal show={true}>
            <Modal.Header>
                <Modal.Title>{modalTitle}</Modal.Title>
            </Modal.Header>
            <Formik validationSchema={[]} initialValues={[]} onSubmit={(values) => submit()}>
                {({ handleSubmit }) => {
                    return (
                        <>
                            <Modal.Body>
                                <Form noValidate onSubmit={handleSubmit}>
                                    <FormGroupComponent>
                                        {/* <AlisFormField name="vykdytojoKomentaras">
                                            <Form.Control as="textarea" rows={2} />
                                        </AlisFormField> */}
                                    </FormGroupComponent>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button className="m-1" variant="outline-primary" onClick={hide} disabled={busy}>
                                    Atšaukti
                                </Button>
                                <Button className="m-1" variant="primary" type="button" onClick={() => handleSubmit()} disabled={busy}>
                                    Teikti
                                </Button>
                            </Modal.Footer>
                        </>
                    );
                }}
            </Formik>
        </Modal>
    );
};
