import styles from "./CardSection.module.css";
import { FaToggleOn } from "react-icons/fa";
import {cardProps, logosPath} from "./componentUtils"


const Icon = FaToggleOn as unknown as React.FC<{ size?: number; color?: string; className? : string}>;


const Card: React.FC<cardProps> = ({cardItem}) => {
  let cardItemInfo = cardItem;

  const IconClass = [
    styles["toggle-icon"],
    cardItemInfo.isActive ? styles["active"] : styles["notActive"]
  ].join(" ");
  
  return (
    <>
          <div className={styles["card"]}>
          < div className={styles['card-body']}>
            <div>
              <img src={logosPath[`../assets/images/${cardItemInfo.logo}`] as string} alt="logo" />
            </div>
            <div>
              <p className={styles["card-title"]}>{
              cardItemInfo.name}</p>
              <p>{cardItemInfo.description}</p>
            </div>
          </div>
          <div className={styles["card-footer"]}>
            <button>Remove</button>
            <span>
              <Icon className={IconClass}  />
            </span>
          </div>
        </div>

    </>
  )
}

export default Card;