import React, { useState } from 'react'
import styles from './DetailedActor.module.css'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import kabir from '../../assets/kabir.png'
import { useLocation } from 'react-router-dom'

const DetailedActor = () => {
  const skills = ["Memorization", "Expression", "Improvisation", "Stage Presence", "Dancing", "Singing", "Posing", "Voice Modulation", "Coordination"]
  const state = useLocation()
  const [stateData] = useState(state)
  const [role] = useState(state.state.role)
  console.log(stateData)
  
  return (
    <div className={styles.actor}>
     <Navbar />
    <div className={styles.actorSec}>
      <div className={styles.leftSec}>
       <img src={stateData.state.profile} />
       <h3>Contact Information</h3><br />
       <span>Phone No. :</span>
       <p>1234567890</p>
       <span>Email Id :</span>
       <p>{stateData.state.name}123@gmail.com</p>
       <span>Social Media Handle <br /> (Instagram) :</span>
       <p>{stateData.state.name}_0909</p>
       <span>Social Media Handle 1 <br /> (Youtube) :</span>
       <p>{stateData.state.name}.k0909</p>
      </div>
      <div className={styles.rightSec}>
      <div>
      {role.map((element)=>(
          <span className={styles.role}>{element}</span>
        ))}
      </div>
      <h2>{stateData.state.name}</h2>
      <p>{stateData.state.location}</p>
      <div style={{display: 'flex', gap: '20vw'}}>
        <span><b>{stateData.state.age}</b> Yrs</span> <span><b>{stateData.state.height}</b> Cm.</span> <span><b>{stateData.state.weight}</b> Kg.</span> <span><b>{stateData.state.gender}</b></span>
      </div><br />
      <hr /><br />
      <h3>Bio</h3>
      <p>{stateData.state.name} is a charismatic {stateData.state.age}-year-old actor and model with a natural talent for captivating audiences.</p>
      <hr /><br />
      <h3>Skills</h3>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>{skills.map((element)=>(
        <div className={styles.skills}>{element}</div>
      ))}</div><br />
      <hr /><br />
      <h3>About</h3>
      <p>Hi, I'm {stateData.state.name}! I love acting, and bringing characters to life. Whether it's performing in front of a camera or walking the runway, I always give my best. In my free time, I enjoy dancing, playing sports, and spending time with my friends. I'm excited to take on new roles and challenges.</p>
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
      <button>Hire</button> <button>Message</button> <button>Shorlist</button>
      </div>
    </div>
    <Footer />   
    </div>
  )
}

export default DetailedActor