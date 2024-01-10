import styles from "./ProjectsGallery.module.css";
import Project from "../../components/complex/Project";

const ProjectsGallery = ({ projects }) => {
    return (
        <>
            <section className="layout">
                <div className={styles.container}>
                    {projects.map((project, i) => (
                        <Project project={project} key={i} max></Project>
                    ))}
                </div>
            </section>
        </>
    );
};

export default ProjectsGallery;
