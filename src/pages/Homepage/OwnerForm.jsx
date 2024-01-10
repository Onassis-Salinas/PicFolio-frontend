import { useState } from "react";
import Button from "../../components/basic/Button";
import EditHomePage from "./EditHomePage";
import styles from "./OwnerForm.module.css";
import { Link } from "react-router-dom";

const OwnerForm = ({ homepage, fetchData }) => {
    const [show1, setShow1] = useState(false);

    return (
        <>
            <div className={styles.buttonsContainer}>
                <Link to="/createproject">
                    <Button>create project</Button>
                </Link>
                <Button onClick={() => setShow1(true)}>edit profile</Button>
            </div>

            <EditHomePage show={show1} setShow={setShow1} homepage={homepage} fetchData={fetchData}></EditHomePage>
        </>
    );
};

export default OwnerForm;
