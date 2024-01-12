import DarkLayer from "../basic/DarkLayer";
import CloseButton from "../basic/CloseButton";
import styles from "./ImageView.module.css";
import { useEffect, useState } from "react";
import { useRef } from "react";
import BaseFloatingDiv from "../basic/BaseFloatingDiv";

const ImageView = ({ show, setShow, image }) => {
    const [animation, setAnimation] = useState("none");
    const isFirstRun = useRef(true);

    useEffect(() => {
        if (isFirstRun.current) {
            isFirstRun.current = false;
            return;
        }
        setAnimation(show ? "show" : "hidden");
    }, [show]);

    return (
        <>
            {image.Link ? (
                <BaseFloatingDiv animation={animation}>
                    <img className={styles.img} src={image.Link} alt="" />

                    <CloseButton onClick={() => setShow(false)} position="in" />
                    {image.Title !== "undefined" ? <h3 className={styles.h3}>{image.Title}</h3> : null}
                </BaseFloatingDiv>
            ) : null}
            <DarkLayer show={show} />
        </>
    );
};

export default ImageView;
