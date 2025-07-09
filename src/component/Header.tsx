import { useEffect, useState } from "react";
import sunIcon from "../assets/images/icon-sun.svg";
import moonIcon from "../assets/images/icon-moon.svg";
import logo from "../assets/images/logo.svg";
import styles from './Header.module.css';

// import { tabIndex } from "./componentUtils";


const Header:React.FC = () => {
  const [isLight, setIsLight] = useState(false);


  useEffect(() => {
    const body = document.body;
    if (isLight) {
      body.classList.add("light-mode");
    } else {
      body.classList.remove("light-mode");
    }
  }, [isLight]);


  return (
    <header>
      <div className={styles["header-container"]}>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className={`${styles["toggle-background"]} ${styles.themeToggle}`} tabIndex={0}
        onClick={() => setIsLight(!isLight)}
        >
          <img src={isLight ? moonIcon : sunIcon} alt="LightMode toggle botton" />
        </div>
      </div>
    </header>
  )
}

export default Header;