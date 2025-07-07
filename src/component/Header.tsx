import sun from "../assets/images/icon-sun.svg";
import logo from "../assets/images/logo.svg";
import syles from './Header.module.css';


export default function Header() {
  return (
    <header>
      <div className={syles["header-container"]}>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <img src={sun} alt="LightMode toggle botton" />
        </div>
      </div>
    </header>
  )
}