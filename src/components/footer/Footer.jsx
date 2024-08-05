import React from 'react'
import styles from './Footer.module.css'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { CgYoutube } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate()
  return (
  <div className={styles.footer}>
  <div className={styles.upper}>
  <div className={styles.company}>
    <h3>Company</h3>
    <ul>
      <li>About us</li>
      <li>Our Team</li>
      <li>Partners</li>
      <li>How We Work</li>
      <li>Contact Us</li>
    </ul>
  </div>
  <div className={styles.artist}>
    <h3>Artists and Recruiters</h3>
    <ul>
      <li>Casting Calls</li>
      <li>Join Our Community</li>
      <li>Agencies</li>
      <li>Popular Auditions</li>
      <li>Post a Job</li>
      <li>Find Talent</li>
      <li>Partners</li>
    </ul>
  </div>
  <div className={styles.support}>
    <h3>Support</h3>
    <ul>
      <li>Help</li>
      <li>Pricing</li>
      <li>FAQ's</li>
      <li>Contact Us</li>
      <li>Privacy Policy</li>
      <li onClick={()=>navigate('/applied')}>Analytics</li>
    </ul>
  </div>
  </div>
  <div className={styles.lower}>
    <span className={styles.connect}>Connect with us</span>  <FaInstagram className={styles.logo}/> <FaXTwitter className={styles.logo}/> <TiSocialFacebookCircular className={styles.logo1}/> <CgYoutube className={styles.logo2}/>
  </div>
  </div>
  )
}

export default Footer