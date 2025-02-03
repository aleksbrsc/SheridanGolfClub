import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import styles from '@css/components/footer.module.css';
import logo from '@assets/logos/sgc_full_light.svg';
import arrow from '@assets/icons/arrow.svg';
import { toast } from 'sonner'

function Footer() {
    const location = useLocation();
    const [toggled, setToggled] = useState(false);

    function getActive(path){
        if (location.pathname === path){
            return styles.active;
        }
        return '';
    }

    function clickHandler(){
        window.scrollTo({top: 0, behavior: 'smooth'});
        if (toggled){
            setToggled(false);
        }
    }

    return (
        <footer id={styles.footer_section}>
            <div id={styles.footer_container}>
                <div id={styles.footer_middle}>
                    <Link id={styles.logo_container} to="/" onClick={() => clickHandler()}>
                        <img id={styles.logo} src={logo} alt="SGC logo" />
                    </Link>
                    <ul>
                        <li className={`${getActive('/')}`}>
                            <Link to="/" onClick={() => clickHandler()}>Home</Link>
                        </li>
                        <li className={`${getActive('/about')}`}>
                            {/* <Link to="/about" onClick={() => clickHandler()}>About</Link> */}
                            <Link onClick={() => toast.warning('Sorry! A few areas of this website are currently under development.')}>About</Link>
                        </li>
                        <li className={`${getActive('/membership')}`}>
                            {/* <Link to="/membership" onClick={() => clickHandler()}>Services</Link> */}
                            <Link onClick={() => toast.warning('Sorry! A few areas of this website are currently under development.')}>Membership</Link>
                        </li>
                        <li className={`${getActive('/events')}`}>
                            {/* <Link to="/events" onClick={() => clickHandler()}>Parts</Link> */}
                            <Link onClick={() => toast.warning('Sorry! A few areas of this website are currently under development.')}>Events</Link>
                        </li>
                        <li className={`${getActive('/contact')}`}>
                            <Link to="/contact" onClick={() => clickHandler()}>Contact</Link>
                        </li>
                    </ul>
                </div>

                <div id={styles.footer_bottom}>
                    <p>© 2025 Sheridan Golf Club. All rights reserved</p>
                    <ul>
                        <li className={`${getActive('/terms')}`}>
                            {/* <Link to="/terms" onClick={() => clickHandler()}>Terms of Service</Link> */}
                            <Link onClick={() => toast.warning('Sorry! A few areas of this website are currently under development.')}>Terms of Service</Link>
                        </li>
                        <li className={`${getActive('/privacy')}`}>
                            {/* <Link to="/privacy" onClick={() => clickHandler()}>Privacy Policy</Link> */}
                            <Link onClick={() => toast.warning('Sorry! A few areas of this website are currently under development.')}>Privacy Policy</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;