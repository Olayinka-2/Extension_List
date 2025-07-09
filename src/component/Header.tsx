import sun from "../assets/images/icon-sun.svg";
import logo from "../assets/images/logo.svg";
import syles from './Header.module.css';

// import { tabIndex } from "./componentUtils";


const Header:React.FC = () => {
  return (
    <header>
      <div className={syles["header-container"]}>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className={syles["toggle-background"]} tabIndex={0}>
          <img src={sun} alt="LightMode toggle botton" />
        </div>
      </div>
    </header>
  )
}

export default Header;