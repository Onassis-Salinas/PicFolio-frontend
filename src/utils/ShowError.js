const ShowError = (err = null) => {
    console.log(err);
    const errorMessage = err.response.data || "Mensaje de error desconocido";
    const rootDiv = document.getElementById("root");

    const errorDiv = document.createElement("div");
    errorDiv.classList.add("errorDiv");
    errorDiv.textContent = String(errorMessage);

    rootDiv.appendChild(errorDiv);

    setTimeout(() => {
        rootDiv.removeChild(errorDiv);
    }, 3000);
};

export default ShowError;
