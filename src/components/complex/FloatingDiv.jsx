import DarkLayer from "../basic/DarkLayer";
import { useEffect, useRef, useState } from "react";
import BaseFloatingDiv from "../basic/BaseFloatingDiv";

const FloatingDiv = ({ children, show, render }) => {
    const [animation, setAnimation] = useState("none");
    const isFirstRun = useRef(true);

    useEffect(() => {
        if (!render && isFirstRun.current) {
            isFirstRun.current = false;
            return;
        }
        setAnimation(show ? "show" : "hidden");
    }, [show]);

    return (
        <>
            <BaseFloatingDiv animation={animation}>{children}</BaseFloatingDiv>
            <DarkLayer show={show} render={render} />
        </>
    );
};

export default FloatingDiv;
