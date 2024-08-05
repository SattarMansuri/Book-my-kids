import React from 'react'
import styles from './Login.module.css'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import { IoLogoFacebook } from "react-icons/io5";
import { FaGooglePlus, FaLinkedin } from "react-icons/fa";

const Login = () => {
  return (
  <div className={styles.login}>
    <Navbar/>
    <div className={styles.content}>
      <h2>Welcome to Book My Kids!</h2>
      <p>Join Book my kids to access exclusive casting opportunities, connect with industry <br /> professionals, and start your journey towards stardom. Join our community and take the <br /> first step in showcasing your talent!</p>
      <div className={styles.loginform}>
        <h2>User Login</h2>
        <div>
          <span style={{fontWeight: "500"}}>Email</span><br />
          <input type="email" className={styles.email}/><br />
          <span style={{fontWeight: "500"}}>Password</span><br />
          <input type="password" className={styles.pass}/><br />
          <input type="checkbox" className={styles.check} /> <span style={{fontSize: "1vw", fontWeight: "200"}}><sup>Remember Me</sup>
          </span>
        </div>
        <button>Login</button> <br />
        <span className={styles.forgot}>Forgot Password?</span><br /><br />
       <span style={{marginLeft: '12vw'}}>OR</span><br /><br />
       <span style={{marginLeft: '10vw'}}>Login With</span> <br /><br />
       <span style={{marginLeft: '10vw'}}><IoLogoFacebook color='#fff' style={{fontSize: '1.5vw'}}/> &nbsp; <FaGooglePlus color='#fff' style={{fontSize: '1.5vw'}} /> &nbsp;  <FaLinkedin color='#fff' style={{fontSize: '1.5vw'}} /></span>
      </div>
    </div>
    <Footer/>
  </div>
  )
}

export default Login