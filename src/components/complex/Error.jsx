import { useState } from "react";

const Error = () => {
    const [error, setError] = useState(false);

    if (error) return;
    return <>Hola</>;
};

export { setError };
export default Error;
