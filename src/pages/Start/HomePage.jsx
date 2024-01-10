import styles from "./HomePage.module.css";

const HomePage = ({ homepage }) => (
    <a className={styles.homepage} href={`/homepage/${homepage.Name}`}>
        <p>{homepage.Name}</p>
    </a>
);

export default HomePage;
