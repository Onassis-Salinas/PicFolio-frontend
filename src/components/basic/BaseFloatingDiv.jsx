import styled from "styled-components";

const BaseFloatingDiv = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 101;
    max-width: calc(100vw - 10px);

    opacity: 0;
    margin-top: 100px;
    visibility: hidden;
    animation: ${(props) => props.animation} 0.3s forwards ease-out;
    @keyframes show {
        0% {
            visibility: visible;
            opacity: 0;
            margin-top: 100px;
        }
        100% {
            visibility: visible;
            opacity: 1;
            margin-top: 0;
        }
    }
    @keyframes hidden {
        0% {
            visibility: visible;
            opacity: 1;
            margin-top: 0;
        }
        99% {
            opacity: 0;
            margin-top: 100px;
        }
        100% {
            visibility: hidden;
        }
    }
`;

export default BaseFloatingDiv;
