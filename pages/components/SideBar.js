import React from "react";
import styles from "../stylesheets/SideBar.module.scss";
import Button from "@mui/material/Button";
import { useAuth0 } from "@auth0/auth0-react";
import SignoutIcon from "@mui/icons-material/ExitToApp";

export default function SideBar({ tasksLength, completedTasks }) {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <div className={styles.mainContainer}>
      <div>
        <h2>
          <span style={{ color: "rgb(64, 109, 204)" }}>Todo List</span> <span style={{ fontStyle: "italic", fontWeight: "700" }}>ICM</span>
        </h2>
        <h4>
          Welcome back <span style={{ fontStyle: "italic", color: "rgb(64, 109, 204)" }}>{user.name}</span>
        </h4>
        {tasksLength >= 1 && (
          <>
            <h5 style={{ fontWeight: "lighter" }}>
              All Tasks <span style={{ fontWeight: "bolder", fontSize: "15px" }}>({tasksLength})</span>
            </h5>
            <h5 style={{ fontWeight: "lighter" }}>
              Completed Tasks <span style={{ fontWeight: "bolder", fontSize: "15px" }}>({completedTasks})</span>
            </h5>
          </>
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
        {isAuthenticated ? (
          <Button
            variant="outlined"
            startIcon={<SignoutIcon />}
            color="error"
            onClick={() => {
              logout();
            }}
          >
            Sign Out
          </Button>
        ) : (
          <Button
            variant="outlined"
            color="error"
            onClick={() => {
              loginWithRedirect();
            }}
          >
            Login
          </Button>
        )}
      </div>
    </div>
  );
}
