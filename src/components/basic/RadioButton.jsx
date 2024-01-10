import styled from "styled-components";

const RadioButton = styled.input.attrs({ type: "radio" })`
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 16px;
    height: 16px;
    border: 2px solid #008000; /* Green border color */
    border-radius: 50%; /* To make it round */
    outline: none;
    margin-right: 8px; /* Optional margin for spacing */
    cursor: pointer;

    &:checked {
        background-color: #008000; /* Green background when checked */
        border-color: #008000; /* Green border color when checked */
    }
`;

export default RadioButton