import React from 'react'
import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom"

const Navbar = () => {

  return (
   <div className={styles.nav}>
    <h1>BOOK MY KIDS</h1>
    <div className={styles.options}>
      <NavLink to='/' className={styles.nave} ><span>Home</span></NavLink>
      <NavLink to= '/jobpost' className={styles.nave} ><span>Find Job</span></NavLink>
      <NavLink to='/actors' className={styles.nave} ><span>Find Talent</span></NavLink>
      <NavLink to='/jobpostmain' className={styles.nave} ><span>Post a Job</span></NavLink>
      <NavLink to='/shortlist' className={styles.nave} ><span>Shortlist</span></NavLink>
      <NavLink to='/community' className={styles.nave} ><span>Community</span></NavLink>
      <NavLink to='/login' className={styles.nave} ><button>Login/Signup</button></NavLink>
    </div>
   </div>
  )
}

export default Navbar