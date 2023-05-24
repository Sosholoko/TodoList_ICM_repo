import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "../stylesheets/LoginPage.module.scss";

export default function LoginPage() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className={styles.mainContainer}>
      <h1>Welcome to TODOLIST</h1>
      <h2>Please login into your account to continue</h2>
      <button
        onClick={() => {
          loginWithRedirect();
        }}
      >
        Login
      </button>
    </div>
  );
}
