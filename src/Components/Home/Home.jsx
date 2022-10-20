import React, { useState, useRef, useContext, useEffect } from 'react';
import { db } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";
import TaskList from '../TaskList/TaskList';
import styles from './Home.module.scss';
import TaskForm from '../TaskForm/TaskForm';
import { UserContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, getAuth } from 'firebase/auth';

const Home = () => {
  
  const user = useContext(UserContext);
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (isLoggedIn) => {
      if(!isLoggedIn) {
        user.setCurrentUser(null);
        navigate("/");
      }
    })  
  },[auth, user, navigate])
      
  const [hasTaskItem, setHasTaskItem] = useState(false);
   
  // Reference(using "useRef") -  to input element
  const inputElement = useRef();
  
  // Time of day greeting statement
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

    const userDocRef = collection(db, "Users", user.currentUser, "tasks");
    addDoc(userDocRef, task)
    setHasTaskItem(!hasTaskItem)

    // form reset to initial values
    inputElement.current.form.reset();
    setHasTaskItem(!hasTaskItem);
  }

  return (
      <main className={styles.homepage}>
          <h1>{greeting}</h1>
          <p>Let's enter some tasks we need to complete for this upcoming week.
             Just use the input below to create a todo.   
          </p>
          <TaskForm type="text" placeholder="Add your task here..." onSubmit={createTask} domRef={inputElement}/>
          <section className={styles.tasklistSection}>
             <TaskList taskItem={{hasTaskItem, setHasTaskItem}} userInfo={user} />
          </section>
      </main>
  )
};

export default Home;
