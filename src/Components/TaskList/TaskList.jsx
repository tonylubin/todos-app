import React, { useState, useEffect,useCallback } from "react";
import styles from './TaskList.module.scss'
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import Todo from "../Todo/Todo";
import UpdateForm from "../UpdateForm/UpdateForm";


const TaskList = ({ taskItem, userInfo }) => {
  
  const [todosList, setTodosList] = useState();
  const [showUpdate, setShowUpdate] = useState(false);
  const [updateId, setUpdateId] = useState();

  // User collection id
  const userId = userInfo.uid;
  
  // GET  - TODOS FROM DATABASE (store in array variable) 
  // useCallback - to prevent infinite loop rerendering due to useEffect getTodos dependency
  const getTodos = useCallback(async () => {   
    let docsResponse = await getDocs(collection(db, "Users", userId, "tasks"));
    let dbList = [];
    docsResponse.forEach((doc) => {
      dbList.push({
        id: doc.id,
        todo: doc.data().todo,
        completed: doc.data().completed,
      });
    });
    setTodosList(dbList);
  },[userId]); 
  
  //  Call  - for list of todos when a task is added
  useEffect(() => {
    getTodos()
  },[getTodos,taskItem]);
  
  // DELETE - TODO
  const deleteTask = async (e) => {
    // document reference
    const taskRef = doc(db, "Users", userId, "tasks", e.target.id);
    await deleteDoc(taskRef);
    getTodos();
  };
  
  // Display update(input) box & grab todo ID 
  const showUpdateInput = async (e) => {
    setShowUpdate(!showUpdate);
    setUpdateId(await e.target.id);
  };
  
  // UPDATE - TODO
  const updateTask = async (e) => {
    e.preventDefault();
    let updatedText = e.target.elements[0].value;
    const taskRef = doc(db, "Users", userId, "tasks", updateId);
    await updateDoc(taskRef, { todo: updatedText });
    setShowUpdate(!showUpdate);
    getTodos();
  };
  
  // UPDATE - TODO (UN)COMPLETED
  const taskCompleted = async (e) => {
    const taskRef = doc(db, "Users", userId, "tasks", e.target.id);
    await updateDoc(taskRef, { completed: e.target.checked });
    getTodos();
  };
  
  return (
    <>
      {showUpdate ? (
        <UpdateForm
        onSubmit={updateTask}
        type="text"
        placeholder="Update your task here..."
        />
        ) : null}
      <ul className={showUpdate ? styles.todoListShow : styles.todoListHide}>
        {todosList &&
          todosList.map((todoItem, index) => (
            <Todo
            key={index}
            id={todoItem.id}
            todo={todoItem.todo}
            complete={todoItem.completed}
              onClickDelete={deleteTask}
              onClickEdit={showUpdateInput}
              onChange={taskCompleted}
            />
          ))}
      </ul>
    </>
  );
};

export default TaskList;
