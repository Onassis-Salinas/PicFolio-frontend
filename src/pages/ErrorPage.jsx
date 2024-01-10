import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h2>Status: {err.status || "No hay codigo"}</h2>
            <h3>{err.data || err.error.message || "No hay mensaje de error"}</h3>
        </div>
    );
};

export default ErrorPage;
