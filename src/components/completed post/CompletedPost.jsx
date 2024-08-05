import React from 'react'
import styles from './CompletedPost.module.css'

const CompletedPost = ({title, location, description}) => {
  return (
    <div className={styles.posts}>
    <div className={styles.title}>{title}</div>
    <span>{location}</span>
    <p>{description}</p>
    <span style={{fontWeight: "500"}}>Apply By-</span> <span style={{color: '#000000'}}>1st Jan 20xx</span>
    <span style={{fontWeight: "500", marginLeft: '8vw'}}>Completed On-</span> <span style={{color: '#000000'}}>1st Mar 20xx</span>
    <button className={styles.see}>See Job Details</button>
  </div>
  )
}

export default CompletedPost