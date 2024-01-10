import Header from "../../components/complex/Header";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
    return (
        <>
            <Header />

            <div className={styles.landingPage}>
                <h1>Welcome to PicFolio</h1>
                <p className={styles.description}>Explore beautiful galleries of photography projects created by talented photographers.</p>
                <p className={styles.description}>Showcase your own photographic masterpieces and connect with a community of creatives.</p>
            </div>
        </>
    );
};

export default LandingPage;
