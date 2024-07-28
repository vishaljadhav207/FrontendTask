'use client'
import styles from "../styles/Notification.module.css";
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast("Notification!");

const Notification = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Hello👋</div>
      <div className={styles.outerCircle}>
        <div className={styles.middleCircle}>
          <div className={styles.innerCircle}>
            <img
              src="./notification.png"
              width={100}
              height={50}
              className={styles.bellIcon}
            />
          </div>
        </div>
      </div>
      <div className={styles.textContainer}>
        <h2>@DiGiLABS...</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <button className={styles.button} onClick={notify}>
        Send Notification
      </button>
      <Toaster />
    </div>
  );
};

export default Notification;
