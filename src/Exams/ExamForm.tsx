import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Form, Modal, Row, Col } from "react-bootstrap";
import { Avatar, Box, Grid, Input, makeStyles, TextField, Typography } from "@material-ui/core";
import { Field, Formik } from "formik";
import FormGroupComponent from "../FormGroupComponent";
import { useLocation } from "react-router-dom";
import { PreExamsItems, QuestionsItems } from "../resource/dto";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import FolderIcon from "@material-ui/icons/Folder";
import OpenIcon from "@material-ui/icons/OpenInNew";
import { red } from "@material-ui/core/colors";
import Timer from "./Timer";

import { createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: "56.25%", // 16:9
    },
    expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: "rotate(180deg)",
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function ExamForm({}) {
    const styles = useStyles();
    const location = useLocation();

    const userData = location.state as PreExamsItems;

    var currentTime = new Date().toLocaleString();

    const examData = [
        {
            object: "Informatikos egzaminas",
            examQ: [
                {
                    category: "Programming",
                    questions: [
                        "What are HTML and CSS?",
                        "What???s the difference between a designer and a developer?",
                        "What is the difference between coding and programming?",
                    ],
                },
                {
                    category: "Cyber Security",
                    questions: ["What is cybersecurity?", "What are the elements of cybersecurity?", "What are the advantages of cyber security?"],
                },
                {
                    category: "Database",
                    questions: [
                        "What do the ???INSERT???, ???UPDATE???, and ???DROP??? queries do?",
                        "When would you use an offline backup method versus an online method?",
                        "What does the primary key of a database table represent? What about its secondary key?",
                    ],
                },
            ],
        },
        {
            object: "Matematikos egzaminas",
            examQ: [
                {
                    category: "Pirma klas??",
                    questions: [
                        "Kiek ab??c??l??je yra raid??i???",

                        "Jei yra 10 vaik?? ir 10 obuoli?? pintin??je. Kaip reikia padalinti kiekvienam po obuol??, kad vienas obuolys likt?? pintin??je.",

                        "Kiek m??nesi?? turi 28 dienas?",
                    ],
                },
                {
                    category: "Logika",
                    questions: [
                        "Kiek tuzine yra 2 cent?? vert??s pa??to ??enkl???",
                        "Kas sunkesnis ar kilogramas p??k?? ar kilogramas akmen???",
                        "Jeigu b??gi maratone tre??ias ir aplenki antr?? tai kelintas tu b??gi?",
                    ],
                },
                {
                    category: "U??daviniai",
                    questions: [
                        "Ma??ylis vienas tort?? suvalgo per 30 min., o kartu su Karlsonu ??? per 5 min. Per kiek minu??i?? Karlsonas vienas suvalgo tort???",

                        "Telefonas kainuoja 300 eur??. Perkant i??simok??tinai, 2 metus kas m??nes?? reikia mok??ti 15 eur?? ??mok??. Keliais procentais telefono kaina i??auga, perkant j?? i??simok??tinai?",

                        "Cukrus sudaro 6 % arbatos g??rimo ???iTea??? mas??s. 1) Rugil?? nusipirko 1,5 kg g??rimo ???iTea???. Kiek gram?? cukraus yra jos nusipirktame g??rime? ",
                    ],
                },
            ],
        },
        {
            object: "Fizikos egzaminas",
            examQ: [
                {
                    category: "Light/Shadow",
                    questions: ["Can air make shadows?", "Can a fire have a shadow?", "Can light bend around corners?"],
                },
                {
                    category: "Elementary Physics",
                    questions: [
                        "As light from a star spreads out and weakens, do gaps form between the photons?",
                        "Can one bit of light bounce off another bit of light?",
                        "Can sound waves generate heat?",
                    ],
                },
                {
                    category: "Basic Physics",
                    questions: [
                        "Who invented the spinning cup anemometer?",
                        "When does the value of energy become zero for an electron?",
                        "Who invented Archimedean screw?",
                    ],
                },
            ],
        },
    ];

    const category = [
        {
            object: "Fizikos egzaminas",
            category: ["Light/Shadow", "Basic Physics", "Elementary Physics"],
        },
    ];

    const [pageNumber, setPageNumber] = useState(1);

    const handleIncrement = () => {
        setPageNumber((prevCount) => prevCount + 1);
    };

    const [examFinished, setExamFinished] = useState(false);
    const [state, setState] = useState("");
    const [examEndDate, setExamEndDate] = useState("");
    const [questions, setQuestions] = useState("");

    useEffect(() => {
        console.log(location.pathname); // result: '/secondpage'
        console.log(location.search); // result: '?query=abc'
        console.log(location.state); // result: 'some_value'
        setState(userData.state);
    }, [location]);

    return (
        <div className="App">
            <Grid container spacing={2} md={12}>
                <Grid item xs={12} md={12}>
                    <Formik
                        initialValues={{ atsakymas: "" }}
                        onSubmit={(values) => {
                            console.log("val", values);
                            setExamFinished(true);
                            setState("Baigtas");
                            setExamEndDate(currentTime);
                        }}
                    >
                        {({ values, handleChange, isValid, handleSubmit, setFieldValue, resetForm, errors }) => {
                            return (
                                <Form>
                                    <Card>
                                        <CardHeader title={userData.examName}></CardHeader>

                                        <CardContent>
                                            {examFinished && (
                                                <Grid item xs={12} md={12}>
                                                    Egzaminas baigtas, a??i??!
                                                </Grid>
                                            )}
                                            {!examFinished && (
                                                <>
                                                    <Grid item xs={12} md={12}>
                                                        <Card>
                                                            {examData
                                                                .filter((ex) => ex.object.match(userData.examName))
                                                                .map((filteredEx) =>
                                                                    filteredEx.examQ
                                                                        // .filter((f) =>
                                                                        //     f.category.match(
                                                                        //         category
                                                                        //             .filter((f) => f.object.match(userData.examName))
                                                                        //             .map(
                                                                        //                 (e) =>
                                                                        //                     e.category[Math.floor(Math.random() * e.category.length)]
                                                                        //             )
                                                                        //             .toString()
                                                                        //     )
                                                                        // )
                                                                        .map((q) => (
                                                                            <div>{q.questions[Math.floor(Math.random() * q.questions.length)]}</div>
                                                                        ))
                                                                )}
                                                        </Card>
                                                        <br />
                                                        <TextField
                                                            id="outlined-multiline-static"
                                                            label="Atsakymas"
                                                            multiline
                                                            rows={4}
                                                            fullWidth
                                                            defaultValue="..."
                                                            variant="outlined"
                                                            name="atsakymas"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={12}>
                                                        <Box
                                                            style={{
                                                                height: 100,
                                                                display: "flex",
                                                                padding: 8,
                                                                justifyContent: "flex-end",
                                                                alignItems: "flex-end",
                                                            }}
                                                        >
                                                            <Grid container spacing={2} md={10}>
                                                                {pageNumber}
                                                            </Grid>
                                                            {pageNumber < 5 && (
                                                                <Button
                                                                    variant="outlined"
                                                                    color="primary"
                                                                    onClick={() => {
                                                                        handleIncrement();
                                                                    }}
                                                                >
                                                                    Kitas klausima {">"}
                                                                </Button>
                                                            )}
                                                            {pageNumber == 5 && (
                                                                <Button
                                                                    variant="outlined"
                                                                    color="secondary"
                                                                    onClick={() => {
                                                                        handleSubmit();
                                                                    }}
                                                                >
                                                                    Baigti egzamin??
                                                                </Button>
                                                            )}
                                                        </Box>
                                                    </Grid>
                                                </>
                                            )}
                                        </CardContent>
                                    </Card>
                                </Form>
                            );
                        }}
                    </Formik>
                </Grid>
            </Grid>

            <Grid container spacing={2} md={6}>
                <Grid item xs={12} md={12}>
                    <Card>
                        <CardHeader title="Studento informacija"></CardHeader>

                        {/* <CardMedia image="./clock.jpg" title="Contemplative Reptile" className={styles.media} /> */}
                        <CardContent>
                            <Grid container spacing={2} md={12}>
                                <Grid item xs={6} sm={6}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Vardas
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {userData.values.firstname}
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Pavard??
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {userData.values.surname}
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        El. pa??tas
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {userData.values.email}
                                    </Typography>
                                    {/* <FormGroupComponent label="Vardas">
                                        <Form.Control type="text" value={userData.values.firstname} plaintext readOnly />
                                    </FormGroupComponent>
                                    <FormGroupComponent label="Pavard??">
                                        <Form.Control type="text" value={userData.values.surname} plaintext readOnly />
                                    </FormGroupComponent>
                                    <FormGroupComponent label="El. pa??tas">
                                        <Form.Control type="text" value={userData.values.email} plaintext readOnly />
                                    </FormGroupComponent> */}
                                </Grid>
                                <Grid item xs={6} sm={6}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Egzamino prad??ia
                                    </Typography>

                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {userData.time}
                                    </Typography>
                                    {examEndDate != "" && (
                                        <>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Egzamino pabaiga
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                {userData.time}
                                            </Typography>
                                        </>
                                    )}
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Lik??s laikas
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        <Timer hoursMinSecs={userData.timer} />
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        B??sena
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {state}
                                    </Typography>
                                    {/* <FormGroupComponent label="Vardas">
                                        <Form.Control type="text" value={userData.values.firstname} plaintext readOnly />
                                    </FormGroupComponent>
                                    <FormGroupComponent label="Pavard??">
                                        <Form.Control type="text" value={userData.values.surname} plaintext readOnly />
                                    </FormGroupComponent>
                                    <FormGroupComponent label="El. pa??tas">
                                        <Form.Control type="text" value={userData.values.email} plaintext readOnly />
                                    </FormGroupComponent> */}
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}
