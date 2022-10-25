import React from "react";
import styles from "./Form.module.scss";

const Form = (props) => {
  const { name, labelName, inputName, action, onClick } = props;

  return (
    <form className={styles.form}>
      {name && 
        <>
          <label htmlFor={name}>{name}</label>
          <input
            className={styles.form__input}
            type="text"
            id={name}
            required
          />
        </>
      }
      <label htmlFor={labelName}>{labelName}</label>
      <input
        className={styles.form__input}
        type="email"
        id={labelName}
        required
      />
      <label htmlFor={inputName}>{inputName}</label>
      <input
        className={styles.form__input}
        type="password"
        id={inputName}
        minLength="6"
        required
      />
      <input
        className={styles.form__button}
        type="submit"
        value={action}
        onClick={onClick}
      />
    </form>
  );
};

export default Form;
