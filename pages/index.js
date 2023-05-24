import React from "react";
import { Auth0ProviderWithHistory } from "../auth0";
import TodoList from "./components/TodoMain";
import styles from "./stylesheets/index.module.scss";

const Home = () => {
  return (
    <Auth0ProviderWithHistory>
      <div className={styles.mainDiv}>
        <div className={styles.todoContainer}>
          <TodoList />
        </div>
      </div>
    </Auth0ProviderWithHistory>
  );
};

export default Home;
