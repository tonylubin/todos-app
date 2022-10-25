import React from 'react';
import styles from "./ErrorMsg.module.scss";

const ErrorMsg = ({ message }) => {
  return (
    <div className={styles.errorBox}>
        <p><span className={styles.errorBox__symbol}>&#9888;</span>Sorry, you encountered an error: <span className={styles.errorBox__msg}>{message}</span></p>
    </div>
  )
};

export default ErrorMsg;