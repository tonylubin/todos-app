import React, { useState, useRef } from 'react';
import { db } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";
import TaskList from '../TaskList/TaskList';
import styles from './Home.module.scss';
import TaskForm from '../TaskForm/TaskForm';

const Home = () => {  
  
  const [hasTaskItem, setHasTaskItem] = useState(false);
  
  // Reference -  to input element
  const inputElement = useRef();
  
  let greeting;
  let hour = new Date().getUTCHours();
  if(hour >=0 && hour < 12) {
      greeting = "Good Morning";
    } else if (hour >= 12 && hour < 18) {
      greeting = "Good Afternoon";
    } else {
      greeting = "Good Evening";
    }

  // CREATE - TODO
  const createTask = (e) => {      
    e.preventDefault();
        // TODO OBJECT
    const task = {
      todo: inputElement.current.value,
      completed: false,
  }

    const usersCollection = collection(db, "Todos");
    addDoc(usersCollection, task)
    setHasTaskItem(!hasTaskItem)

    // form reset to initial values
    inputElement.current.form.reset();

  }  



  return (
      <main className={styles.homepage}>
          <h1>{greeting}</h1>
          <p>Let's enter some tasks we need to complete for this upcoming week.
             Just use the input below to create a todo.   
          </p>
          <TaskForm type="text" placeholder="Add your task here..." onSubmit={createTask} domRef={inputElement}/>
          <section className={styles.tasklistSection}>
             <TaskList taskItem={hasTaskItem} />
          </section>
      </main>
  )
};

export default Home;
