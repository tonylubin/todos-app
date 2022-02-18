import React from "react";
import styles from "./UpdateForm.module.scss";

const UpdateForm = (props) => {

  return (
    <form className={styles.updateForm} id={props.id} onSubmit={props.onSubmit}>
      <input
        className={styles.updateForm__input}
        type={props.type}
        placeholder={props.placeholder}
        autoFocus
      />
      <button className={styles.updateForm__btn} type="submit">Update
      </button>
    </form>
  );
};

export default UpdateForm;
