import React from 'react';
import styles from '../styles/Button.module.css';
import Link from 'next/link';

const Button = ({ href, content }) => {
  const buttonContent = (
    <button className={`${styles.button} ${styles.glow}`}>{content}</button>
  );

  return href ? (
    <Link href={href}>
      {buttonContent}
    </Link>
  ) : (
    buttonContent
  );
};

export default Button;
