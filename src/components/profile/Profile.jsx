import React from 'react'
import styles from './Profile.module.css'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import AnalyticsSidebar from '../analytics sidebar/AnalyticsSidebar'
import kabir from '../../assets/kabir.png'

const Profile = () => {
  const skills = ["Memorization", "Expression", "Improvisation", "Stage Presence", "Dancing", "Singing", "Posing", "Voice Modulation", "Coordination"]
  return (
    <div className={styles.profile}>
      <Navbar />
      <div className={styles.main}>
        <AnalyticsSidebar/>
        <div className={styles.rightSec}>
          <img src={kabir}/>
      <div>
      {['Actor', 'Model'].map((element)=>(
          <span className={styles.role}>{element}</span>
        ))}
      </div>
      <h2>Kabir</h2>
      <p>Mumbai</p>
      <div style={{display: 'flex', gap: '20vw'}}>
        <span><b>9</b> Yrs</span> <span><b>132</b> Cm.</span> <span><b>28</b> Kg.</span> <span><b>Male</b></span>
      </div><br />
      <hr /><br />
      <h3>Bio</h3>
      <p>Kabir is a charismatic 9-year-old actor and model with a natural talent for captivating audiences.</p>
      <hr /><br />
      <h3>Skills</h3>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>{skills.map((element)=>(
        <div className={styles.skills}>{element}</div>
      ))}</div><br />
      <hr /><br />
      <h3>About</h3>
      <p>Hi, I'm Kabir! I love acting, and bringing characters to life. Whether it's performing in front of a camera or walking the runway, I always give my best. In my free time, I enjoy dancing, playing sports, and spending time with my friends. I'm excited to take on new roles and challenges.</p>
      <hr /><br />
      <h3><b>Past Experiences</b></h3><br /><br />
      <h3>1. TV Commercial for Health Drink(2022)</h3>
      <h4>Lead Child Actor</h4>
      <p>
      Portrayed an energetic and enthusiastic child enjoying a refreshing health drink. Demonstrated a convincing and joyful performance, capturing the essence of the product's benefits.
      </p>
      <h3>2. Fashion Show for Mumbai Fashion(2022)</h3>
      <h4>Runway Model</h4>
      <p>Walked the runway showcasing the latest kids' fashion. Displayed confidence, style, and a playful attitude that resonated with the audience and photographers.</p>
      <hr /><br />
      <h3><b>Certifications</b></h3><br />
      <h3>1. Acting Workshop Completion Certificate(2023)</h3>
      <h4>Mumabi Acting Academy</h4>
      <p>Successfully completed a 6-week intensive acting workshop focusing on improvisation, voice modulation, and stage presence. Learned from experienced industry professionals and participated in various practical exercises and performances.</p>
      <hr />
      <button>Save Details</button> <button>Update Documents</button>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Profile