import React from 'react';
import styles from './Todo.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

const Todo = (props) => {

  return (
    <li className={styles.listItem}>
        <input type="checkbox" name="todo-checkbox" id={props.id} onChange={props.onChange} checked={props.complete}/>        
        <p className={`${styles.listItem__p} ${props.complete ? styles.listItem__text : ""}`}>{props.todo}</p>
        <span id={props.id} onClick={props.onClickDelete}><FontAwesomeIcon icon={faTrashAlt} className={styles.listItem__del}/></span>
        <span id={props.id} onClick={props.onClickEdit}><FontAwesomeIcon icon={faEdit} className={styles.listItem__edit}/></span>
    </li>
  )
};

export default Todo;
