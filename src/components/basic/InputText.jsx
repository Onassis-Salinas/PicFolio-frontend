import styles from "./InputText.module.css";

const InputText = ({ value, onChange, required, name, placeholder }) => (
    <div className={styles.loginBox}>
        <input value={value} onChange={onChange} type="text" name={name} required={required} />
        <label>{placeholder}</label>
    </div>
);

export default InputText;
