import { Link } from "react-router-dom";
import styles from "./Project.module.css";

const Project = ({ project, creator, max }) => (
    <div className={styles.project} style={{ width: max ? "100%" : "280px" }}>
        <Link to={`/project/${project.id}`}>
            <img src={project.DefaultImage} alt="" />
        </Link>

        <h5>{project.Title}</h5>
        {creator && <p>{project.title}</p>}
    </div>
);

export default Project;
