import { useParams } from "react-router-dom";
import Header from "../../components/complex/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { apiBase } from "../../utils/config";
import BasicLayout from "./ProjectsLayouts/BasicLayout";
import ElegantLayout from "./ProjectsLayouts/ElegantLayout";
import ImpactfulLayout from "./ProjectsLayouts/ImpactfulLayout";
import ModernLayout from "./ProjectsLayouts/ModernLayout";
import CreativeLayout from "./ProjectsLayouts/CreativeLayout";

const ProjectView = () => {
    const { projectId } = useParams();
    if (projectId === "test") console.log("test")
    const [project, setProject] = useState({ title: "test", layoutId: 1, images: [] });

    const fetchData = async () => {
        const { data: result } = await axios.get(`${apiBase}/projects?projectId=${projectId}`);
        console.log(result);
        setProject(result);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <Header></Header>
            {project.layoutId === 1 ? <BasicLayout project={project} /> : null}
            {project.layoutId === 2 ? <ElegantLayout project={project} /> : null}
            {project.layoutId === 3 ? <ImpactfulLayout project={project} /> : null}
            {project.layoutId === 4 ? <ModernLayout project={project} /> : null}
            {project.layoutId === 5 ? <CreativeLayout project={project} /> : null}
        </>
    );
};

export default ProjectView;
