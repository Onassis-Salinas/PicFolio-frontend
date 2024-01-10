import Header from "../../components/complex/Header";
import styles from "./PricingPage.module.css";

const PricingPage = () => {
    return (
        <>
            <Header />

            <div className={styles.pricingPage}>
                <h1>Choose the Perfect Plan for You</h1>
                <div className={styles.pricingContainer}>
                    <div className={styles.plan}>
                        <h2>Basic Plan</h2>
                        <p className={styles.price}>$9.99/month</p>
                        <ul className={styles.features}>
                            <li>10 GB Storage</li>
                            <li>Basic Support</li>
                            {/* Add more features as needed */}
                        </ul>
                        <button className={styles.subscribeButton}>Subscribe</button>
                    </div>
                    <div className={styles.plan}>
                        <h2>Pro Plan</h2>
                        <p className={styles.price}>$19.99/month</p>
                        <ul className={styles.features}>
                            <li>30 GB Storage</li>
                            <li>Premium Support</li>
                            {/* Add more features as needed */}
                        </ul>
                        <button className={styles.subscribeButton}>Subscribe</button>
                    </div>
                    <div className={styles.plan}>
                        <h2>Premium Plan</h2>
                        <p className={styles.price}>$29.99/month</p>
                        <ul className={styles.features}>
                            <li>Unlimited Storage</li>
                            <li>24/7 VIP Support</li>
                            {/* Add more features as needed */}
                        </ul>
                        <button className={styles.subscribeButton}>Subscribe</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PricingPage;
