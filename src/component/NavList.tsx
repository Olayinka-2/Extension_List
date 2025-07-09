import React, { useState } from "react";
import styles from "./NavList.module.css";

interface itemType {
  setItemDisplay: React.Dispatch<React.SetStateAction<string>>;
  itemDisplay: string
}

const NavList:React.FC<itemType> = ({setItemDisplay}) => {

 let [activeTab, setActiveTab] = useState<string>("All");

  const handleClick = (label: string) => {
    setItemDisplay(label);
    setActiveTab(label)
  };

  const navItems = ["All", "Active", "Inactive"];

  return (
    <>
      <section id="navigation">
          <div className={styles["navigationContainer"]}>
            <div className={styles.navLinkHeader}>Extensions List</div>
            <div className='col-12 col-sm-6'>
              <ul className={styles["nav-links"]}>
                {
                  navItems.map(item => (
                    <li key={item}>
                        <a className={`${activeTab === item ? styles.active: ""}`}
                        href="#"
                        onClick={() => handleClick(item)
                        }>{item}</a>
                      </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </section>
    </>
  )
}

export default NavList;