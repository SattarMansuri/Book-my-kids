import React from 'react'
import styles from './Profile1.module.css'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import { FaCloudArrowUp } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const Profile1 = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.profile1}>
      <Navbar/>
      <div className={styles.p1form}>
      <h2>Personal Details</h2>
      <div style={{ display: 'flex'}}>
     <div>
     <label>First Name</label><br />
     <input placeholder='First Name' className={styles.same} type="text" />
     </div>
     <div>
     <label>Last Name</label><br />
     <input placeholder='Last Name' className={styles.same} type="text" />
     </div>
      </div>
      <div style={{ display: 'flex', marginTop: '3vh'}}>
      <div>
     <label>Gender</label><br />
     <select name="" id="">
     <option disabled selected>Gender</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
     </select>
     </div>
     <div>
      <label>Date of Birth</label><br />
      <input className={styles.dob} type="text" /> <input className={styles.dob} type="text" /> <input className={styles.dob} type="text" />
     </div>
      </div><br />
      <div style={{ display: 'flex'}}>
     <div>
     <label>Contact Number</label><br />
     <input placeholder='Contact Number' className={styles.same} type="tel" />
     </div>
     <div>
     <label>Alternate Contact Number</label><br />
     <input placeholder='Alternate Contact Number' className={styles.same} type="tel" />
     </div>
      </div><br />
     <div>
     <label>Email ID</label><br />
     <input placeholder='Email Id' className={styles.same} type="email" />
     </div><br />
     <div>
     <label>Address</label><br />
     <input placeholder='Address' className={styles.add} type="text" />
     </div><br />
     <div style={{ display: 'flex'}}>
     <div>
     <label>City</label><br />
     <input placeholder='City' className={styles.same} type="text" />
     </div>
     <div>
     <label>State</label><br />
     <input placeholder='State' className={styles.same} type="text" />
     </div>
      </div><br />
      <h3>Upload Files</h3>
      <p>To ensure the security and authenticity of our community, please upload the required documents for verification. This step helps us prevent <br /> fraud and maintain a safe environment for all our members.</p><br />
      <div className={styles.drag}>
      <FaCloudArrowUp className={styles.cloud} /><br />
      <span>Drag files to upload</span><br />
      <span>or</span><br />
      <span>Browse files</span>
      </div>
      <button onClick={()=>navigate('/profile2')}>Next</button>
      </div>
      <Footer/>
    </div>
  )
}

export default Profile1