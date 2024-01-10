import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p className={styles.legal}>
                © 2024 <span>PicFolio</span>. Created by <a href="http://onassis.dev" >Onassis Salinas</a>
            </p>
        </footer>
    );
};

export default Footer;
