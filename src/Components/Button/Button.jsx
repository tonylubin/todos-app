import React from 'react';
import styles from './Button.module.scss';

const Button = (props) => {
  return (
      <button className={styles.defaultButton}  onClick={props.onClick}>{props.text}</button>
  )
};

export default Button;
