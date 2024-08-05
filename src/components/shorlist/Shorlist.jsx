import React from 'react'
import styles from './Shorlist.module.css'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import { SHORTLISTED, SIMILAR } from '../utils'
import ActorsProfile from '../actors profile/ActorsProfile'

const Shorlist = () => {
  return (
    <div className={styles.shorlist}>
      <Navbar />
      <div className={styles.main}>
        <h2>Shortlisted</h2>
        {SHORTLISTED.map((element)=>(
          <ActorsProfile name={element.name} role={element.role} profile={element.src} height={element.height} weight={element.weight} gender={element.gender} age={element.age} />
        ))}<br /><br />
         <h2>Browse similar artists</h2>
         {SIMILAR.map((element)=>(
          <ActorsProfile name={element.name} role={element.role} profile={element.src} height={element.height} weight={element.weight} gender={element.gender} age={element.age} />
        ))}
      </div>     
      <Footer/>
    </div>
  )
}

export default Shorlist