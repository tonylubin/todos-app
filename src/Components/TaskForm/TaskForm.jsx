import React from 'react';
import styles from './TaskForm.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const TaskForm = (props) => {

  const { id, type, placeholder, value, domRef, onSubmit } = props;

  return (
    <form className={styles.taskForm} id={id}>
        <input className={styles.taskForm__input} type={type} placeholder={placeholder} defaultValue={value} ref={domRef}/>
        <span onClick={onSubmit}><FontAwesomeIcon icon={faPlusCircle} /></span>
    </form>
  )
};

export default TaskForm;
