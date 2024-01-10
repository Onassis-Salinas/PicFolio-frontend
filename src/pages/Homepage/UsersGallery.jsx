import HomePage from "../Start/HomePage";
import styles from "./UsersGallery.module.css";

const UsersGallery = ({ homepages }) => (
    <div className={styles.homepagesContainer}>
        {homepages.map((homepage, i) => (
            <HomePage key={i} homepage={homepage}></HomePage>
        ))}
    </div>
);

export default UsersGallery;
