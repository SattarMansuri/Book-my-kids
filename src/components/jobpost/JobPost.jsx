import React from 'react'
import styles from './JobPost.module.css'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import Posts from '../posts/Posts'
import { IoMdSearch } from "react-icons/io";
import { AGE, LOCATION, ETHNICITY, POSTS } from '../utils'

const JobPost = () => {
  return (
    <div className={styles.jobpost}>
      <Navbar/>
      <div className={styles.job}>
      <IoMdSearch className={styles.searchLogo} />
        <input type="text" className={styles.search} />
        <div className={styles.filter}>
          <div style={{display : 'flex', flexWrap: 'wrap', gap: '1vw'}}>
            <select style={{ width: '9vw'}}>
              <option disabled selected>Job Type</option>
              <option value="fulltime">Fulltime</option>
              <option value="parttime">Part time</option>
              <option value="contract">Contract</option>
            </select>
            <select style={{width: '6vw'}}>
              <option disabled selected>Age</option>
             {AGE.map((element)=>(
               <option key={element}>{element}</option>
             ))}
            </select>
            <select style={{width: '9vw'}}>
              <option disabled selected>Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <select style={{width: '10vw'}}>
              <option disabled selected>Location</option>
              {LOCATION.map((element)=>(
               <option key={element}>{element}</option>
             ))}
            </select>
            <select style={{width: '12vw'}}>
              <option disabled selected>Production Type</option>
              <option>Primary</option>
              <option>Secondary</option>
              <option>Tertiary</option>
            </select>
            <select style={{width: '10vw'}}>
              <option disabled selected>Ethnicity</option>
              {ETHNICITY.map((element)=>(
               <option key={element}>{element}</option>
             ))}
            </select>
            <select style={{width: '10vw'}}>
              <option disabled selected>Posted By</option>
              <option>Recruiter 1</option>
              <option>Recruiter 2</option>
              <option>Recruiter 3</option>
            </select>
            <select style={{width: '12vw'}}>
              <option disabled selected>Language</option>
              <option>English</option>
              <option>Hindi</option>
              <option>Tamil</option>
              <option>Gujrati</option>
            </select>
            <select style={{width: '15vw'}}>
              <option disabled selected>Compensation</option>
              <option>1k - 5k</option>
              <option>5k - 10k</option>
              <option>10k - 15k</option>
              <option>15k - 20k</option>
              <option>20K+</option>
            </select>
          </div>
          <button>Apply</button>
        </div>
        <div>
         {POSTS.map((element)=>(
          <Posts key={element.id} description={element.description} title={element.title} location={element.location}/>
         ))}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default JobPost