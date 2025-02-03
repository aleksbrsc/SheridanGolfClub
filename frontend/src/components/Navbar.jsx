import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from '@css/components/navbar.module.css';
import logo from '@assets/logos/sgc_light.svg';
import mini_logo from '@assets/logos/sgc_icon_dark.svg';
import arrow_top_right_light from '@assets/icons/arrow_top_right_light.svg';
import { toast } from 'sonner'

function Navbar() {
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
        <nav id={styles.nav_container}>
            <div id={styles.nav} data-toggled={toggled}>
                <Link id={styles.logo_container} to="/" onClick={() => clickHandler()}>
                    <img id={styles.logo} src={logo} alt="SGC logo" />
                </Link>
                <ul className={styles.list}>
                    <li>
                        <Link id={styles.logo_container} to="/" onClick={() => clickHandler()}>
                            <img id={styles.mini_logo} src={mini_logo} alt="SGC logo" />
                        </Link>
                    </li>
                    {/* <li className={`${styles.list_item} ${getActive('/')}`}>
                        <Link to="/" onClick={() => clickHandler()}>Home</Link>
                    </li> */}
                    <li className={`${styles.list_item} ${getActive('/about')}`}>
                        {/* <Link to="/about" onClick={() => clickHandler()}>About</Link> */}
                        <Link onClick={() => toast.warning('Sorry! A few areas of this website are currently under development.')}>About</Link>
                    </li>
                    <li className={`${styles.list_item} ${getActive('/membership')}`}>
                        {/* <Link to="/membership" onClick={() => clickHandler()}>Membership</Link> */}
                        <Link onClick={() => toast.warning('Sorry! A few areas of this website are currently under development.')}>Membership</Link>
                    </li>
                    <li className={`${styles.list_item} ${getActive('/events')}`}>
                        {/* <Link to="/events" onClick={() => clickHandler()}>Events</Link> */}
                        <Link onClick={() => toast.warning('Sorry! A few areas of this website are currently under development.')}>Events</Link>
                    </li>
                    <li id={styles.contact_link} className={`${styles.list_item} ${getActive('/contact')}`}>
                        <Link to="/contact" onClick={() => clickHandler()}>Contact</Link>
                    </li>
                </ul>
                <Link to="/contact" onClick={() => clickHandler()} className={`${styles.list_item} ${styles.contact_button} ${getActive('/contact')}`}>
                    <a>Contact us</a>
                    <a><img src={arrow_top_right_light} alt="Arrow"/></a>
                </Link>
                <div className={styles.burger} onClick={() => setToggled(!toggled)}> 
                    <div />
                    <div />
                    <div />
                </div>
                <div className={`${styles.overlay} ${toggled && styles.active}`} onClick={() => setToggled(!toggled)}></div>
            </div>
        </nav>
    )
}

export default Navbar;