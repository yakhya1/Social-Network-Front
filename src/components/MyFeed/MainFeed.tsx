import React from "react";
import { Link } from "react-router-dom";
import styles from "./MyFeed.module.scss"

const MainFeed: React.FC = () => {
  return (
    <div className={styles.app}>

    <div className={styles.allPage}>

      <div className={styles.sideBar}></div>

      <div className={styles.mainContent}>

          <div className={styles.contentHeader}>

              <div className={styles.avaName}>

                  <img className={styles.avaImg} src="https://i.ibb.co/qJBKH3D/Abdurrahman.jpg" alt="ava" />
                  <div className={styles.fullName}>

                      <div className={styles.name}>Abdurrahman Navrazov</div>
                      <Link to={"#"} className={styles.linkToChangeProfile}>Укажите информацию о себе</Link>

                  </div>

              </div>
                <div className={styles.blockForChanging}>
              <button className={styles.changeProfile}>Редактировать профиль</button>
              <button className={styles.yet}> Ещё</button>
              </div>
              
          </div>

          <div className={styles.contentMain}>
              <div className={styles.leftSide}></div>
              <div className={styles.rightSide}></div>
          </div>

      </div>
    </div>
  </div>
  );
};

export default MainFeed;
