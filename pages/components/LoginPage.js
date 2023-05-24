import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "../stylesheets/LoginPage.module.scss";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";

export default function LoginPage() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainBlock}>
        <h1>
          Welcome to <br /> <br />
          <span style={{ color: "rgb(64, 109, 204)", fontSize: "50px" }}>Todo</span>
          <span style={{ textDecoration: "line-through", fontSize: "50px" }}>List</span> ICM
        </h1>
        <br />
        <h2 style={{ fontStyle: "italic" }}>Keep track of your life</h2>
        <h3 style={{ fontWeight: "lighter" }}>Please login into your account to continue</h3>
      </div>
      <div className={styles.buttonContainer}>
        <Button
          endIcon={<GoogleIcon />}
          variant="contained"
          onClick={() => {
            loginWithRedirect();
          }}
        >
          Login with
        </Button>
      </div>
    </div>
  );
}
