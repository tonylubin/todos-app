import React from 'react';
import styles from './Button.module.scss';

const Button = ({ onClick, text }) => {
  return (
      <button className={styles.defaultButton}  onClick={onClick}>{text}</button>
  )
};

export default Button;
