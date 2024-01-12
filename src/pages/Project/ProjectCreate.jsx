import Header from "../../components/complex/Header";
import { useEffect, useState } from "react";
import BasicLayout from "./ProjectsLayouts/BasicLayout";
import ElegantLayout from "./ProjectsLayouts/ElegantLayout";
import ImpactfulLayout from "./ProjectsLayouts/ImpactfulLayout";
import ModernLayout from "./ProjectsLayouts/ModernLayout";
import CreativeLayout from "./ProjectsLayouts/CreativeLayout";
import styles from "./ProjectCreate.module.css";
import axios from "axios";
import { apiBase } from "../../utils/config";
import InputText from "../../components/basic/InputText";
import RadioButton from "../../components/basic/RadioButton";
import Select from "../../components/basic/Select";
import Button from "../../components/basic/Button";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import FloatingDiv from "../../components/complex/FloatingDiv";
import ShowError from "../../utils/ShowError";

const ProjectCreate = () => {
    const [project, setProject] = useState({ title: "test", layoutId: 0, images: [] });
    const [title, setTitle] = useState("");
    const [imageSelected, setImageSelected] = useState(0);
    const [images, setImages] = useState([]);
    const [titles, setTitles] = useState([]);
    const [defaultImage, setDefaultImage] = useState(0);
    const [imagePreviews, setImagePreviews] = useState([]);
    const [layoutId, setLayoutId] = useState(1);
    const [show, setShow] = useState(true);
    const navigate = useNavigate();

    const loadImages = async () => {
        const newImagePreviews = [];
        if (!images) return;

        for (const [i, file] of Array.from(images).entries()) {
            const reader = new FileReader();

            reader.onload = () => {
                newImagePreviews[i] = reader.result;
                if (newImagePreviews.filter((e) => !!e).length === images.length) setImagePreviews(newImagePreviews);
            };

            reader.readAsDataURL(file);
        }
    };

    useEffect(() => {
        loadImages();
        setImageSelected(0);
        setTitles([]);
        setDefaultImage(0);
    }, [images]);

    useEffect(() => {
        if (imagePreviews.length === 0) return;
        const images = [];
        imagePreviews.forEach((preview, i) => images.push({ Link: imagePreviews[i], title: titles[i] }));

        setProject({ title, layoutId: parseInt(layoutId), images });
    }, [title, titles, layoutId, imagePreviews]);

    const uploadProject = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.post(`${apiBase}/projects/create`, { title, layoutId });
            const projectId = result.data.id;

            const formData = new FormData();
            Object.keys(images).forEach((image) => formData.append("files", images[image]));

            const metadata = [];
            Object.keys(images).forEach((image, i) => {
                metadata.push({
                    title: titles[i],
                    projectId,
                    defaultImage: i === defaultImage,
                });
            });

            formData.append("metadata", JSON.stringify(metadata));
            await await axios.post(`${apiBase}/projects/images`, formData);
            navigate(`/homepage/${Cookies.get("username")}`);
        } catch (err) {
            ShowError(err);
        }
    };

    const changeTitle = (e, i) => {
        const newTitles = titles;
        newTitles[i] = e.target.value;
        setTitles(newTitles);
    };

    const layouts = {
        Normal: 1,
        Elegant: 2,
        Impactful: 3,
        Modern: 4,
        Creative: 5,
    };

    const arrowClick = (e, number) => {
        e.preventDefault();
        const result = imageSelected + number;
        if (result < 0 || result >= imagePreviews.length) return;
        setImageSelected(result);
    };

    const close = (e) => {
        e.preventDefault();
        setShow(false);
    };

    return (
        <>
            <Header />

            <FloatingDiv render show={show} setShow={setShow}>
                <form className={styles.form} onSubmit={uploadProject}>
                    <h4>Create project</h4>
                    <InputText value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title:" required />
                    <Select title="Layout:" value={layoutId} onChange={(e) => setLayoutId(e.target.value)} options={layouts}></Select>
                    <input type="file" name="" id="" multiple accept=".jpg, .jpeg, .png, .webp" onChange={(e) => setImages(e.target.files)} required />

                    <div className={styles.imageContainer}>
                        {imagePreviews.map((imagePreview, i) => (
                            <div className={styles.imageBox} key={i} style={{ display: i === imageSelected ? "inline" : "none" }}>
                                <img className={styles.img} src={imagePreview} alt="" key={i} />
                                <InputText onChange={(e) => changeTitle(e, i)} placeholder="Description:" />
                                <label>
                                    <RadioButton value={"group-" + i} name="groudp" onChange={() => setDefaultImage(i)} />
                                    Cover image
                                </label>
                            </div>
                        ))}
                        {imagePreviews.length > 0 && imageSelected !== 0 && (
                            <button className={styles.arrowButton + " " + styles.left} onClick={(e) => arrowClick(e, -1)}>
                                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M8 12L14 6V18L8 12Z' fill='currentColor'%3E%3C/path%3E%3C/svg%3E" alt="" />
                            </button>
                        )}
                        {imagePreviews.length > 0 && imageSelected !== imagePreviews.length - 1 && (
                            <button className={styles.arrowButton + " " + styles.right} onClick={(e) => arrowClick(e, 1)}>
                                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M16 12L10 18V6L16 12Z' fill='currentColor'%3E%3C/path%3E%3C/svg%3E" alt="" />
                            </button>
                        )}
                    </div>

                    <div className={styles.buttonsContainer}>
                        <Button>Subir</Button>
                        <Button onClick={(e) => close(e)}>Preview</Button>
                    </div>
                </form>
            </FloatingDiv>

            <div className={styles.editButton}>
                <Button onClick={() => setShow(true)}>Modify</Button>
            </div>

            {project.layoutId === 0 && <p>Sin fotos</p>}
            {project.layoutId === 1 && <BasicLayout project={project} />}
            {project.layoutId === 2 && <ElegantLayout project={project} />}
            {project.layoutId === 3 && <ImpactfulLayout project={project} />}
            {project.layoutId === 4 && <ModernLayout project={project} />}
            {project.layoutId === 5 && <CreativeLayout project={project} />}
        </>
    );
};

export default ProjectCreate;
