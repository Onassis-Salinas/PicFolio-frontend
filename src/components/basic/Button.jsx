import styled from "styled-components";

const Button = styled.button`
    background-color: ${(props) => (!props.negative ? "var(--bc)" : "var(--color2)")};
    color: ${(props) => (!props.negative ? "var(--text)" : "var(--bc)")};
    border: 1px solid ${(props) => (!props.negative ? "var(--text)" : "var(--color2)")};
    padding: 6px 18px;
    border-radius: var(--br);
    font-size: var(--text5);
    cursor: pointer;
    font-family: "Lato", sans-serif;
    text-transform: uppercase;
    letter-spacing: 1px;
`;

export default Button;
