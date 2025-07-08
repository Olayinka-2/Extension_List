import styles from "./NavList.module.css";

export default function NavList() {
  return (
    <>
      <section id="navigation">
          <div className={styles["navigationContainer"]}>
            <div className={styles.navLinkHeader}>Extensions List</div>
            <div className='col-12 col-sm-6'>
              <ul className={styles["nav-links"]}>
                <li className="nav-item">
                  <a className="btn btn-Red-700 text-white rounded-pill" href="#">All</a>
                </li>
                <li className="nav-item">
                  <a className="btn btn-Red-700 text-white rounded-pill" href="#">Active</a>
                </li>
                <li className="nav-item">
                  <a className="btn btn-Red-700 text-white rounded-pill" href="#">Inactive</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
    </>
  )
}