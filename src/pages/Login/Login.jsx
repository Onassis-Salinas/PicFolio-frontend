import axios from "axios";
import { useState } from "react";
import { apiBase } from "../../utils/config";
import FloatingDiv from "../../components/complex/FloatingDiv";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import InputText from "../../components/basic/InputText";
import Button from "../../components/basic/Button";
import CloseButton from "../../components/basic/CloseButton";
import ShowError from "../../utils/ShowError";

const Login = ({ show, setShow }) => {
    const [loginData, setLoginData] = useState({ email: "", password: "" });

    const handleChange = (e) => setLoginData({ ...loginData, [e.target.name]: e.target.value });

    const loginUser = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${apiBase}/auth/login`, loginData);
            // window.location.reload();
        } catch (err) {
            ShowError(err);
        }
    };

    return (
        <FloatingDiv show={show} setShow={setShow}>
            <CloseButton onClick={() => setShow(false)} position="in" black></CloseButton>
            <form onSubmit={loginUser} className={styles.form}>
                <h4>Login</h4>
                <InputText value={loginData.email} onChange={handleChange} name="email" placeholder="Email:" required />
                <InputText value={loginData.password} onChange={handleChange} name="password" placeholder="Password:" required />

                <Button className={styles.login}>Login</Button>
                <p className={styles.signupMessage}>
                    Don&apos;t have an account yet? <Link to="/signup">Sign up</Link>
                </p>
            </form>
        </FloatingDiv>
    );
};

export default Login;
