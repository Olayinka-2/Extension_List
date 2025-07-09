import styles from "./CardSection.module.css";
import Card from "./Card";

import data from "../../data.json";

import {dataStructure} from "./componentUtils"

interface itemType {
  setItemDisplay?: React.Dispatch<React.SetStateAction<string>>;
  itemDisplay?: string
}

const CardContainer:React.FC<itemType> = ({itemDisplay }) => {

  let filteredData: dataStructure[] = data;

  if (itemDisplay?.toLowerCase() === "active") {
    filteredData = data.filter((e) => e.isActive);
  } else if (itemDisplay?.toLowerCase() === "inactive") {
    filteredData = data.filter((e) => !e.isActive);
  }

  return(
    <>
      <main>
        <div className={styles["card-container"]}>
          <div className={styles["innerContainer"]}>
          {
            filteredData.map((cardItems, index) => (
              <Card key={index} cardItem={cardItems} />
            ))
          }
          </div>
        </div>
        </main>
    </>
  )
}

export default CardContainer;