import React, { useState, useRef } from 'react'
import styles from './Profile2.module.css'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import { FaCloudArrowUp } from "react-icons/fa6";
import { CgCollage } from 'react-icons/cg';

const Profile2 = () => {
  const [skills, setSkills] = useState([])
  const [Language, setLanguage] = useState([])
  const skillRef = useRef()
  const langRef = useRef()

  const addSkills = (e) =>{
    if(e.key === 'Enter'){
      setSkills([...skills, skillRef.current.value])
       skillRef.current.value = ""
    }
   
  }
  const removeSkill=(i)=>{
   let newSkill = skills.filter((elem)=>{
    return elem !== i
   })
   setSkills(newSkill)
  }

  const addLang = (e) =>{
    if(e.key === 'Enter'){
      setLanguage([...Language, langRef.current.value])
       langRef.current.value = ""
    }
   
  }
  const removeLang=(i)=>{
   let newLang = Language.filter((elem)=>{
    return elem !== i
   })
   setLanguage(newLang)
  }
  
  return (
    <div className={styles.profile2}>
      <Navbar/>
      <div className={styles.p2form}>
        <h2>Other Details</h2>
        <label>Bio</label><br />
        <input type="text" placeholder='Wirte a short bio' className={styles.same} /><br />
        <label>About Yourself</label><br />
        <textarea placeholder='Write a brief description about yourself'/><br />
        <label>Skills</label><br />
        <input ref={skillRef} onKeyDown={addSkills} type="text" placeholder='Type Skill' className={styles.same} /><br />
        <div className={styles.setskills}>
          {skills.map((element)=>(
          <div className={styles.eachskill}>{element}<span onClick={()=>removeSkill(element)}>X</span></div>
          ))}
        </div>
        <label>Language Required</label><br />
        <input ref={langRef} onKeyDown={addLang} type="text" placeholder='Type Language' className={styles.same} /><br />
        <div className={styles.setskills}>
        {Language.map((element)=>(
        <div className={styles.eachskill}>{element}<span onClick={()=>removeLang(element)}>X</span></div>
          ))}
        </div>
       <div style={{display: 'flex'}}>
          <div>
          <label>Age (in years)</label><br />
          <input type="text" placeholder='Age' className={styles.details} />
          </div>
          <div>
          <label>Gender</label><br />
          <input type="text" className={styles.details} />
          </div>
          <div>
          <label>Ethnicity</label><br />
          <input type="text" className={styles.details} />
          </div>
        </div><br />
        <div style={{display: 'flex'}}>
          <div>
          <label>Height</label><br />
          <input type="text" className={styles.details} />
          </div>
          <div>
          <label>Weight</label><br />
          <input type="text" className={styles.details} />
          </div>
          <div>
          <label>Body Type</label><br />
          <input type="text" className={styles.details} />
          </div>
        </div>
        <div style={{display: 'flex'}}>
          <div>
          <label>Hair Color</label><br />
          <input type="text" className={styles.details} />
          </div>
          <div>
          <label>Eye Color</label><br />
          <input type="text" className={styles.details} />
          </div>
        </div><br />
        <label>Social Media Handles(URL)</label><br />
        <input type="text" placeholder='Social Media Handle 1'  className={styles.social}/><br />
        <input type="text" placeholder='Social Media Handle 2'  className={styles.social}/><br />
        <input type="text" placeholder='Social Media Handle 3' className={styles.social}/><br /><br />
        <h3>Past Experience</h3>
        <div style={{display: 'flex'}}>
          <div>
          <label>Name of the Project</label><br />
          <input type="text" placeholder='Name' className={styles.project} />
          </div>
          <div>
          <label>Year</label><br />
          <input type="text" placeholder='Year' className={styles.year} />
          </div>
        </div><br />
        <div style={{display: 'flex'}}>
          <div>
          <label>Duration (in months)</label><br />
          <input type="text" placeholder='Duration' className={styles.year} />
          </div>
          <div>
          <label>Role</label><br />
          <input type="text" placeholder='Role Title' className={styles.project} />
          </div>
        </div><br />
        <label>About the Project</label><br />
        <textarea placeholder='Brief Description of the project and your role in the Project' name="" id=""></textarea><br />
        <label>Relevent Links (if any)</label>
        <input type="text" placeholder='Add link to showcases your work better' className={styles.same} /><br />
        <div className={styles.exp}>+ Add Experience</div><br /><br />
        <h3>Upload Photos/Videos</h3>
        <p>To showcase your talent effectively, please upload your photos and videos. High-quality visuals help casting professionals see your <br /> potential and match you with the right opportunities.</p><br />
        <div className={styles.drag}>
      <FaCloudArrowUp className={styles.cloud} /><br />
      <span>Drag files to upload</span><br />
      <span>or</span><br />
      <span>Browse files</span>
      </div>
      <button>Submit</button>
      </div>
      <Footer/>
    </div>
  )
}

export default Profile2