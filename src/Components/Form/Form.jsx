import React from 'react';
import styles from './Form.module.scss';

const Form = (props) => {
  return (
      <form className={styles.form}>
          <label htmlFor={props.labelName}>{props.labelName}</label>
          <input className={styles.form__input} type="email" id={props.labelName} required/>
          <label htmlFor={props.inputName}>{props.inputName}</label>
          <input className={styles.form__input} type="password" id={props.inputName} minLength="6" required />
          <input className={styles.form__button} type="submit" value={props.action} onClick={props.onClick}/>
      </form>
  )
};

export default Form;
