import TodoList from "./components/TodoMain";
import styles from "./stylesheets/index.module.scss";
import { Html, Head, Main, NextScript } from "next/document";

const Home = () => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.todoContainer}>
        <TodoList />
      </div>
    </div>
  );
};

export default Home;
