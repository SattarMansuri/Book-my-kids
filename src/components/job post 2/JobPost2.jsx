import React from 'react'
import { useState, useRef } from 'react'
import styles from './JobPost2.module.css'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import {ETHNICITY} from '../utils'

const JobPost2 = () => {
  const projects = ['Theater', 'Film', 'TV Shows & Web Series', 'Commercials', 'Live Events', 'Music Videos', 'Live Events', 'Video Games', 'Podcasts', 'Fashion Shows', 'Audiobooks', 'Print Ads & Catalogs', 'Brand Endorsements', 'Social Media Campaigns', 'Other']
  const organizations = ['Theater', 'Brand', 'Production House', 'Creative/Marketing Agency', 'Studio/Network', 'Casting Office', 'Personal Project', 'Other']
  const [skills, setSkills] = useState([])
  const skillRef = useRef()
  const [Language, setLanguage] = useState([])
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
    <div className={styles.job}>
      <Navbar />
      <div className={styles.jobpost}>
        <h2>Type of Project</h2>
        <div className={styles.projects}>
         {projects.map((element)=>(
          <span>{element}</span>
         ))} 
        </div><br />
        <h2>Type of organization</h2>
        <div className={styles.projects}>
         {organizations.map((element)=>(
          <span>{element}</span>
         ))} 
        </div><br /><br />
        <h2>Other Details</h2><br />
        <div style={{display: 'flex'}}>
          <div>
            <label>Company Name</label><br />
            <input type="text" placeholder='Company Name' className={styles.same} />
          </div>
          <div>
            <label>Recruiter</label><br />
            <input type="text" placeholder='Recruiter' className={styles.same} />
          </div>
        </div><br />
        <label>Company Website</label><br />
        <input type="text" placeholder='Company Website' className={styles.nosame} /><br /><br />
        <div style={{display: 'flex'}}>
          <div>
            <label>Job Title</label><br />
            <input type="text" placeholder='Job title' className={styles.same} />
          </div>
          <div>
            <label>Location</label><br />
            <input type="text" placeholder='Location' className={styles.same} />
          </div>
        </div><br />
        <label>About the Project</label><br />
        <textarea placeholder='About the porject'></textarea><br />
        <label>Job Role</label><br />
        <textarea placeholder='Job Role'></textarea><br />
        <div style={{display: 'flex'}}>
          <div>
            <label>Start By</label><br />
            <input type="text" placeholder='Start By' className={styles.start} />
          </div>
          <div>
            <label>Duration</label><br />
            <input type="text" placeholder='Duration' className={styles.start} />
          </div>
          <div>
            <label>Apply By</label><br />
            <input type="text" placeholder='Apply By' className={styles.start} />
          </div>
        </div><br />
        <label>Skills</label><br />
        <input ref={skillRef} onKeyDown={addSkills} type="text" placeholder='Type Skill' className={styles.nosame} /><br /><br />
        <div className={styles.setskills}>
          {skills.map((element)=>(
          <div className={styles.eachskill}>{element}<span onClick={()=>removeSkill(element)}>X</span></div>
          ))}
        </div><br />
        <label>Compensation (in Rs.)</label><br />
        <input type="text" placeholder='Apply By' className={styles.start} /> 
        <select style={{width: '6vw'}}>
          <option>Day</option>
          <option>Week</option>
          <option>Month</option>
          <option>Year</option>
        </select><br />
        <input style={{backgroundColor: '#000000'}} type="checkbox"/><span style={{color: '#fff', fontSize: '.8vw'}}>Do not show this in Job post</span>
        <br /><br />
        <div style={{display: 'flex'}}>
          <div>
            <label>Age (in years)</label><br />
            <input type="text" placeholder='Age' className={styles.start} />
          </div>
          <div>
            <label>Gender</label><br />
            <select style={{width: '28vw'}}>
              <option disabled selected>Choose Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label>Ethnicity</label><br />
            <select style={{width: '28vw'}}>
              <option disabled selected>Choose Ethnicity</option>
              {ETHNICITY.map((element)=>(
                <option>{element}</option>
              ))}
            </select>
          </div>
        </div><br />
        <div style={{display: 'flex'}}>
          <div>
            <label>Height</label><br />
            <select style={{width: '28vw'}}>
            <option disabled selected>Choose Height</option>
            </select>
          </div>
          <div>
            <label>Weight</label><br />
            <select style={{width: '28vw'}}>
            <option disabled selected>Choose Weight</option>  
            </select>
          </div>
          <div>
            <label>Body Type</label><br />
            <select style={{width: '28vw'}}>
            <option disabled selected>Choose Body Type</option>
            </select>
          </div>
        </div><br />
        <div style={{display: 'flex'}}>
          <div>
            <label>Hair Color</label><br />
            <select style={{width: '28vw'}}>
            <option disabled selected>Choose Hair Color</option>
            </select>
          </div>
          <div>
            <label>Eye Color</label><br />
            <select style={{width: '28vw'}}>
            <option disabled selected>Choose Eye Color</option>
            </select>
          </div>
        </div><br />
        <label>Language Required</label><br />
        <input ref={langRef} onKeyDown={addLang} type="text" placeholder='Type Language' className={styles.nosame} /><br /><br />
        <div className={styles.setskills}>
        {Language.map((element)=>(
        <div className={styles.eachskill}>{element}<span onClick={()=>removeLang(element)}>X</span></div>
          ))}
        </div><br /><br />
        <button>Post Job</button>
      </div>
      <Footer/>
    </div>
  )
}

export default JobPost2