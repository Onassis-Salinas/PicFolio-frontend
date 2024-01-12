import { useState } from "react";
import ImageView from "../../../components/complex/ImageView";
import styles from "./CreativeLayout.module.css";

const CreativeLayout = ({ project }) => {
    const [show, setShow] = useState(false);
    const [displayedImage, setDisplayedImage] = useState({});

    const selectImage = (image) => {
        setDisplayedImage(image);
        setShow(true);
    };

    return (
        <div className={styles.projectContainer+ " layout"}>
            <section>
                <h2>{project.title}</h2>
            </section>

            <section className={styles.section}>
                <div className={styles.gallery}>
                    {project.images.map((image, i) => (
                        <div onClick={() => selectImage(image)} className={styles.image} key={i}>
                            <img className={styles.img} src={image.Link} alt="" />
                        </div>
                    ))}
                </div>

                <ImageView show={show} setShow={setShow} image={displayedImage} />
            </section>
        </div>
    );
};

export default CreativeLayout;
