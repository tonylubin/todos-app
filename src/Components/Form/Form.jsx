import React from 'react';
import styles from './Form.module.scss';

const Form = (props) => {
  return (
      <form className={styles.form}>
          <label htmlFor={props.labelName}>{props.labelName}</label>
          <input className={styles.form__input} type="text" id={props.labelName} />
          <label htmlFor={props.inputName}>{props.inputName}</label>
          <input className={styles.form__input} type="text" id={props.inputName} />
          <input className={styles.form__button} type="submit" value={props.action} onClick={props.onClick}/>
      </form>
  )
};

export default Form;
