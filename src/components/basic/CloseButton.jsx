import styled from "styled-components";

const CloseButton = styled.button`
    top: ${(props) => (props.position === "in" ? "5px" : "-20px")};
    right: ${(props) => (props.position === "in" ? "5px" : "-20px")};
    position: fixed;
    border: none;
    background: none;
    width: 30px;
    aspect-ratio: 1;
    padding: 0;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='${(props) =>props.black ? "rgba(0,0,0,1)" : "rgba(255,255,255,1)"}'%3E%3Cpath d='M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z'%3E%3C/path%3E%3C/svg%3E");
`;

export default CloseButton;
