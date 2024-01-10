import styles from "./Select.module.css";

const Select = ({ title, options, value, onChange }) => (
    <div>
        <label className={styles.label}>{title}</label>
        <select className={styles.select} value={value} onChange={onChange}>
            {Object.keys(options).map((element, i) => (
                <option key={i} value={options[element]}>
                    {element}
                </option>
            ))}
        </select>
    </div>
);

export default Select;
