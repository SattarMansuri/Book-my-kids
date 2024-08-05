import React from 'react'
import styles from './Actors.module.css'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import {AGE, LOCATION, ETHNICITY, ACTOR_PROFILE} from '../utils'
import { IoMdSearch } from "react-icons/io";
import ActorsProfile from '../actors profile/ActorsProfile'

const Actors = () => {
  return (
    <div className={styles.actors}>
      <Navbar/>
      <div className={styles.actorSec}>
      <div className={styles.filter}>
          <div style={{display : 'flex', flexWrap: 'wrap', gap: '1vw'}}>
            <select style={{ width: '10vw'}}>
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
            <select style={{width: '10vw'}}>
              <option disabled selected>Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <select style={{width: '11vw'}}>
              <option disabled selected>Location</option>
              {LOCATION.map((element)=>(
               <option key={element}>{element}</option>
             ))}
            </select>
            <select style={{width: '11vw'}}>
              <option disabled selected>Hair Color</option>
              <option>Primary</option>
              <option>Secondary</option>
              <option>Tertiary</option>
            </select>
            <select style={{width: '11vw'}}>
              <option disabled selected>Eye Color</option>
              <option>Black</option>
              <option>Brown</option>
              <option>Green</option>
            </select>
            <select style={{width: '11vw'}}>
              <option disabled selected>Ethnicity</option>
              {ETHNICITY.map((element)=>(
               <option key={element}>{element}</option>
             ))}
            </select>
            <select style={{width: '9vw'}}>
              <option disabled selected>Height</option>
            </select>
            <select style={{width: '9vw'}}>
              <option disabled selected>Body Type</option>
            </select>
            <select style={{width: '9vw'}}>
              <option disabled selected>Size Chart</option>
            </select>
            <select style={{width: '12vw'}}>
              <option disabled selected>Language</option>
              <option>English</option>
              <option>Hindi</option>
              <option>Tamil</option>
              <option>Gujrati</option>
            </select>
            <IoMdSearch className={styles.searchLogo} />
        <input type="text" placeholder='Keyword' className={styles.search} />
          </div>
          <button>Apply</button>
        </div>
       {ACTOR_PROFILE.map((element)=>(
        <ActorsProfile key={element.id} role={element.role} name={element.name} profile={element.src} height={element.height} age={element.age} gender={element.gender} location={element.location} weight={element.weight}/>
       ))}
      </div>
      <Footer/>
    </div>
  )
}

export default Actors