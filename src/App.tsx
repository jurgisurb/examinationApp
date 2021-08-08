import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./login/LoginForm";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import RegisterForm from "./login/RegisterForm";
import { Col, Nav, Navbar, Row } from "react-bootstrap";
import { useState } from "react";
import Profile from "./users/Profile";
import About from "./About/About";
import SideBar from "./sidebar/SideBar";
import { FaEdit, FaUser } from "react-icons/fa";
import Settings from "./users/Settings";
import Exams from "./Exams/Exams";
import styled from "styled-components";
import ExamForm from "./Exams/ExamForm";

const App: React.FC = () => {
    const [authenticated, setAuthenticated] = useState(false);

    const Grid = styled.div`
        display: grid;
        grid-template-columns: 0.12fr 1fr;
    `;

    return (
        <Router>
            <Navbar>
                <div className="NavBar">
                    <Nav>
                        <Navbar.Brand onClick={() => alert("Egzaminų platforma")} className="m-0 p-0">
                            <FaUser></FaUser>
                        </Navbar.Brand>
                        {/* <NavLink to="/about" className="inactive" activeClassName="active">
                                    Apie
                                </NavLink>
                                <NavLink to="/" className="inactive" activeClassName="active">
                                    Prisijungti
                                </NavLink> */}
                    </Nav>
                </div>
            </Navbar>
            <Grid>
                <nav>
                    <SideBar />
                </nav>
                <main>
                    <Route exact path="/">
                        {/* <LoginForm /> */}
                    </Route>
                    {/* <Route path="/register">
                        <RegisterForm />
                    </Route> */}
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route exact path="/exams">
                        <Exams />
                    </Route>
                    <Route path="/settings">
                        <Settings />
                    </Route>
                    <Route path="/profile">
                        <Profile id={1} />
                    </Route>
                    <Route path="/exam">
                        <ExamForm />
                    </Route>
                </main>
            </Grid>
            {/* <Route exact path="/register">
                    <RegisterForm />
                </Route> */}
        </Router>
    );
};
export default App;
