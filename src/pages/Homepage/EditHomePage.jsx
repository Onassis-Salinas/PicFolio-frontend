import { useState } from "react";
import Button from "../../components/basic/Button";
import FloatingDiv from "../../components/complex/FloatingDiv";
import { apiBase } from "../../utils/config";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./EditHomePage.module.css";
import InputText from "../../components/basic/InputText";
import ShowError from "../../utils/ShowError";

const EditHomePage = ({ show, setShow, homepage, fetchData }) => {
    const lastUsername = useParams().username;
    const [description, setDescription] = useState(homepage.Description);
    const [username, setUsername] = useState(lastUsername);
    const navigate = useNavigate();

    const editDescription = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`${apiBase}/homepage`, { description });
            await axios.put(`${apiBase}/users/username`, { username, lastUsername });
            navigate("/homepage/" + username);
            fetchData();
            setShow(false);
        } catch (err) {
            ShowError(err)
        }
    };

    const close = (e) => {
        e.preventDefault();
        setShow(false);
    };

    return (
        <FloatingDiv show={show} setShow={setShow}>
            <form className={styles.form} onSubmit={() => setShow(false)}>
                <h4>Edit profile</h4>
                <InputText value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username:" required />
                <InputText value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description:" required />

                <div className={styles.buttonsContainer}>
                    <Button onClick={editDescription}>Save changes</Button>
                    <Button onClick={close} negative>
                        Discard
                    </Button>
                </div>
            </form>
        </FloatingDiv>
    );
};

export default EditHomePage;
