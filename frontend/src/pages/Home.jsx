import { Link } from "react-router-dom";
import styles from "@css/home.module.css";
import hero_banner from "@assets/images/home/hero_banner.jpg";
import arrow_top_right from "@assets/icons/arrow_top_right.svg";
import people from "@assets/icons/people.svg";
import money from "@assets/icons/money.svg";

const Home = () => {
    return (
        <>
            <section id={styles.hero_section}>
                <div id={styles.hero_container}>
                    <div id={styles.hero_header}>
                        <h1>Sheridan Golf Club</h1>
                        <a>Become a member</a>
                    </div>
                    <div id={styles.popup}>

                    </div>
                </div>
                <div id={styles.hero_banner}>
                    <img id={styles.hero_banner} src={hero_banner}/>
                    <div id={styles.hero_banner_overlay}/>
                </div>
            </section>
            <section id={styles.about_section}>
                <div id={styles.about_container}>
                </div>
            </section>
        </>
    );
};

export default Home;