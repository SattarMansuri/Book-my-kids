import React from 'react'
import styles from './Stats.module.css'

const Stats = ({msg}) => {
  return (
    <div className={styles.stats}>
      <h3 className={styles.num}>00</h3>
      <p className={styles.msg}>{msg}</p>
    </div>
  )
}

export default Stats