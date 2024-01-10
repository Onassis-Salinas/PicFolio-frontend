import { useParams } from "react-router-dom";
import { apiBase } from "../../utils/config";
import Header from "../../components/complex/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import H2 from "../../components/basic/H2";
import B from "../../components/basic/B";
import ProjectsGallery from "./ProjectsGallery";
import OwnerForm from "./OwnerForm";
import styles from "./Homepage.module.css";
import ShowError from "../../utils/ShowError";

const Homepage = () => {
    const { username } = useParams();

    const [homepage, setHomepage] = useState({});
    const [projects, setProjects] = useState([]);
    const [isMine, setIsMine] = useState(false);
    const fetchData = async () => {
        try {
            const result = await axios.post(`${apiBase}/homepage`, { username });
            setIsMine(!!result.data.myHomepage);
            setHomepage(result.data.homepage || result.data.myHomepage);
            setProjects(result.data.projects);
            console.log(projects);
        } catch (err) {
            ShowError(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <Header></Header>

            <section className={styles.head}>
                <H2>{username}</H2>
                <B>{homepage.Description}</B>
                {isMine ? <OwnerForm homepage={homepage} fetchData={fetchData} /> : null}
            </section>

            <ProjectsGallery projects={projects} />
        </>
    );
};

export default Homepage;
