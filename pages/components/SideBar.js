import React from "react";
import styles from "../stylesheets/SideBar.module.scss";
import Button from "@mui/material/Button";

export default function SideBar({ tasksLength }) {
  return (
    <div className={styles.mainContainer}>
      <div>
        <h2>
          <span style={{ color: "blue" }}>Todo List</span> <span style={{ fontStyle: "italic", fontWeight: "700" }}>ICM</span>
        </h2>
        {tasksLength >= 1 && (
          <h5 style={{ fontWeight: "lighter" }}>
            Current Tasks <span style={{ fontWeight: "bolder" }}>{tasksLength}</span>
          </h5>
        )}
      </div>
      <div className={styles.sideTab}>
        <p style={{ color: "white", marginLeft: "10px" }}>My Todo List</p>
      </div>
      <div className={styles.sideTabInactive}>
        <p style={{ color: "rgb(64, 109, 204)", marginLeft: "10px" }}>My Account</p>
      </div>
      <div className={styles.sideTabInactive}>
        <p style={{ color: "rgb(64, 109, 204)", marginLeft: "10px" }}>Settings</p>
      </div>
      <div className={styles.signOutBtn}>
        <Button variant="outlined" color="error">
          Sign Out
        </Button>
      </div>
    </div>
  );
}
