import React from 'react';
import styles from './Todo.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

const Todo = (props) => {

  const { id, onChange, complete, todo, onClickDelete, onClickEdit } = props;

  return (
    <li className={styles.listItem}>
        <input type="checkbox" name="todo-checkbox" id={id} onChange={onChange} checked={complete}/>        
        <p className={`${styles.listItem__p} ${complete ? styles.listItem__text : ""}`}>{todo}</p>
        <span id={id} onClick={onClickDelete}><FontAwesomeIcon icon={faTrashAlt} className={styles.listItem__del}/></span>
        <span id={id} onClick={onClickEdit}><FontAwesomeIcon icon={faEdit} className={styles.listItem__edit}/></span>
    </li>
  )
};

export default Todo;
