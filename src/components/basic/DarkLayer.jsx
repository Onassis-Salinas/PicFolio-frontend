import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const BaseDarkLayer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    z-index: ${(props) => (props.zindex ? props.zindex : 1)};

    opacity: 0;
    visibility: hidden;
    animation: ${(props) => props.animation} 0.3s forwards ease-out;
    @keyframes show1 {
        0% {
            visibility: visible;
            opacity: 0;
        }
        100% {
            visibility: visible;
            opacity: 0.85;
        }
    }
    @keyframes hidden1 {
        0% {
            visibility: visible;
            opacity: 0.85;
        }
        99% {
            opacity: 0;
        }
        100% {
            visibility: hidden;
        }
    }
`;

const DarkLayer = ({ render, show }) => {
    const [animation, setAnimation] = useState("none");
    const isFirstRun = useRef(true);

    useEffect(() => {
        console.log("iteracion");
        if (!render && isFirstRun.current) {
            isFirstRun.current = false;
            return;
        }
        setAnimation(show ? "show1" : "hidden1");
    }, [show]);

    return <BaseDarkLayer animation={animation} />;
};

export default DarkLayer;
