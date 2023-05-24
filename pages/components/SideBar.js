import React from "react";
import styles from "../stylesheets/SideBar.module.scss";
import Button from "@mui/material/Button";
import { useAuth0 } from "@auth0/auth0-react";
import SignoutIcon from "@mui/icons-material/ExitToApp";
import GeneralDialog from "../components/modal/GeneralDialog";

export default function SideBar({ tasksLength, completedTasks }) {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <div className={styles.mainContainer}>
      <div>
        <h3>
          <span style={{ color: "rgb(64, 109, 204)", fontSize: "27px" }}>Todo</span>
          <span style={{ textDecoration: "line-through", fontSize: "27px" }}>List</span> ICM
        </h3>
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
          <>
            <GeneralDialog
              title={"Log Out"}
              message={"Are you sure you want to be logged out ? Your session will be lost."}
              cancel={"Cancel"}
              confirm={"Yes"}
              button={"Sign Out"}
              confirmAction={() => logout()}
              startIcon={<SignoutIcon />}
              color={"error"}
            />
          </>
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
