import styles from "./CardSection.module.css";
import Card from "./Card";

import data from "../../data.json";

import {dataStructure} from "./componentUtils"

let dataArray:dataStructure[] = data;

const CardContainer:React.FC = () => {
  return(
    <>
      <main>
        <div className={styles["card-container"]}>
          {
            dataArray.map((cardItems, index) => (
              <Card key={index} cardItem={cardItems} />
            ))
          }
        </div>
        </main>
    </>
  )
}

export default CardContainer;