import React from 'react'
import styles from './Talent.module.css'

const Talent = ({image, title, text}) => {
  return (
    <div className={styles.talent}>
    <img src={image}/><br /><br />
    <h2>{title}</h2><br />
    <span>{text}</span>
    </div>
  )
}

export default Talent