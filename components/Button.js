import React from 'react'
import styles from '../styles/Button.module.css'

const Button = () => {
  return (
    <button className={`${styles.button} ${styles.glow}` } >Afla mai multe</button>
  )
}

export default Button