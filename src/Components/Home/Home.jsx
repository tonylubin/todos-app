import React, { useState, useRef, useContext } from "react";
import { db } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";
import TaskList from "../TaskList/TaskList";
import styles from "./Home.module.scss";
import TaskForm from "../TaskForm/TaskForm";
import { UserContext } from "../../App";
import { getCurrentTimeOfDay } from "../../util/functions";


const Home = () => {

  //const user = useContext(UserContext);
  const { currentUser } = useContext(UserContext);
  
  const [hasTaskItem, setHasTaskItem] = useState(false);

  // Reference(using "useRef") -  to input element
  const inputElement = useRef();

  // Time of day greeting statement
  let greetingMsg = 
  `${getCurrentTimeOfDay()}, 
   ${currentUser.displayName}
  `;
  
  // CREATE - TODO
  const createTask = (e) => {
    e.preventDefault();
    // TODO OBJECT
    const task = {
      todo: inputElement.current.value,
      completed: false,
    };

    const userDocRef = collection(db, "Users", currentUser.uid, "tasks");
    addDoc(userDocRef, task);
    setHasTaskItem(!hasTaskItem);

    // form reset to initial values
    inputElement.current.form.reset();
    setHasTaskItem(!hasTaskItem);
  };

  return (
    <main className={styles.homepage}>
      <h1>{greetingMsg}</h1>
      <p>
        Let's enter some tasks we need to complete for this upcoming week. Just
        use the input below to create a todo.
      </p>
      <TaskForm
        type="text"
        placeholder="Add your task here..."
        onSubmit={createTask}
        domRef={inputElement}
      />
      <section className={styles.tasklistSection}>
        <TaskList taskItem={{ hasTaskItem, setHasTaskItem }} userInfo={currentUser} />
      </section>
    </main>
  );
};

export default Home;
