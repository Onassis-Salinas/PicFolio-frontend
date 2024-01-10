import axios from "axios";
import { useState } from "react";
import { apiBase } from "../../utils/config";
import { useNavigate } from "react-router-dom";
import ShowError from "../../utils/ShowError";
import styles from "./Register.module.css";
import Header from "../../components/complex/Header";
import InputText from "../../components/basic/InputText";
import Button from "../../components/basic/Button";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const registerUser = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${apiBase}/auth/register`, { username, email, password });
            navigate("/");
            console.log("registrado");
        } catch (err) {
            ShowError(err);
        }
    };
    return (
        <>
            <Header />

            <form className={styles.registrationForm} onSubmit={registerUser}>
                <h4>Register</h4>
                <InputText sid="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
                <InputText id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                <InputText type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                <Button className={styles.button}>Register</Button>
            </form>
        </>
    );
};

export default Register;
