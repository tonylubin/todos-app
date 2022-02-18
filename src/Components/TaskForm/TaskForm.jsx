import React from 'react';
import styles from './TaskForm.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const TaskForm = (props) => {

  return (
    <form className={styles.taskForm} id={props.id}>
        <input className={styles.taskForm__input} type={props.type} placeholder={props.placeholder} defaultValue={props.value} ref={props.domRef}/>
        <span onClick={props.onSubmit}><FontAwesomeIcon icon={faPlusCircle} /></span>
    </form>
  )
};

export default TaskForm;
