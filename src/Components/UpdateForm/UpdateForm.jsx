import React from "react";
import styles from "./UpdateForm.module.scss";

const UpdateForm = (props) => {

  const { id, onSubmit, type, placeholder } = props;

  return (
    <form className={styles.updateForm} id={id} onSubmit={onSubmit}>
      <input
        className={styles.updateForm__input}
        type={type}
        placeholder={placeholder}
        autoFocus
      />
      <button className={styles.updateForm__btn} type="submit">Update
      </button>
    </form>
  );
};

export default UpdateForm;
