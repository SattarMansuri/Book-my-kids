import React from 'react'
import styles from './AppliedPosts.module.css'

const AppliedPosts = ({title, location, description}) => {
  return (
    <div className={styles.posts}>
      <div className={styles.title}>{title}</div>
      <span>{location}</span>
      <p>{description}</p>
      <span style={{fontWeight: "500"}}>Apply By-</span> <span style={{color: '#000000'}}>20 May 20xx</span>
    </div>
  )
}

export default AppliedPosts