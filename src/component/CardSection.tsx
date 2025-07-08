import logo from "../assets/images/logo-devlens.svg";
import styles from "./CardSection.module.css";

export default function CardContainer() {
  return(
    <>
      <main>
        <div className={styles["card-container"]}>
          <div className={styles["card"]}>
              < div className={styles['card-body']}>
                <div><img src={logo} alt="logo" /></div>
                <div>
                  <p className={styles["card-title"]}>DevLens</p>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti nihil doloremque quisquam maiores aliquid natus.</p>
                </div>
              </div>
              <div className={styles["card-footer"]}>
                <button>Rmove</button>
                <span className="material-icons">menu</span>
<span id={styles["icons"]} className="material-icons">toggle_on</span>
<span className="material-icons">toggle_off</span>

              </div>
            </div>
        </div>
        </main>
    </>
  )
}