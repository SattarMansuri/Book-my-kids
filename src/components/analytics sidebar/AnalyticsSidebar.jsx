import React from 'react'
import styles from './AnalyticsSidebar.module.css'
import { NavLink } from 'react-router-dom'

const AnalyticsSidebar = () => {
  return (
    <div className={styles.side}><br />
      <NavLink to='/applied' className={styles.applied}  >Applied</NavLink><br /><br /><br />
      <NavLink to='/progress' className={styles.progress}>In Progress</NavLink><br /><br /><br />
      <NavLink to='/completed' className={styles.completed} >Completed</NavLink><br /><br /><br />
      <NavLink to='/profile' className={styles.profile}>Your Profile</NavLink>
    </div>
  )
}

export default AnalyticsSidebar