import { Link } from "react-router-dom";
import styles from './navbar.module.css'

const Navbar = () => {
    return (
           <div className={styles.topnav}>
      <Link to="/home">Home </Link>
      <Link to="/about">About Us </Link>
      <Link to="/">Contact Us </Link>
    </div>
        
    )
}
export default Navbar;
