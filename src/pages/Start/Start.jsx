import axios from "axios";
import Header from "../../components/complex/Header";
import { apiBase } from "../../utils/config";
import { useEffect, useState } from "react";
import styles from "./Start.module.css";
import ProjectsGallery from "../Homepage/ProjectsGallery";
import SearchBar from "./SearchBar";
import UsersGallery from "../Homepage/UsersGallery";

const Start = () => {
    const [projects, setProjects] = useState([]);
    const [homepages, setHomePages] = useState([]);
    const [searchSection, setSearchSection] = useState("projects");

    const fetchData = async () => {
        const projectsFetch = await axios.get(apiBase + "/projects/popular");
        setProjects(projectsFetch.data);

        const homepagesFetch = await axios.get(apiBase + "/homepage/popular");
        setHomePages(homepagesFetch.data);
    };

    const search = async (searchValue, searchSection, e) => {
        if (e) e.preventDefault();

        if (searchSection === "projects") {
            const projectsFetch = await axios.post(apiBase + "/projects/search", { value: searchValue });
            setProjects(projectsFetch.data);
        }
        if (searchSection === "users") {
            const homepagesFetch = await axios.post(apiBase + "/homepage/search", { value: searchValue });
            setHomePages(homepagesFetch.data);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <Header></Header>
            <section className={styles.start}>
                <SearchBar search={search} searchSection={searchSection} setSearchSection={setSearchSection} />

                {searchSection === "users" && <UsersGallery homepages={homepages} />}

                {searchSection === "projects" && <ProjectsGallery projects={projects} />}
            </section>
        </>
    );
};

export default Start;
