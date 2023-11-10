import React from 'react'
import styles from '../styles/Button.module.css'
import Link from 'next/link'

const Button = ({href,content}) => {
  return (
    <button className={`${styles.button} ${styles.glow}`  } ><Link href={href}>{content}</Link></button>
  )
}

export default Button