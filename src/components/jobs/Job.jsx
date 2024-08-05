import React, { useState } from 'react'
import styles from './Job.module.css'
import { IoLocationOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { FaRegBookmark, FaBookmark } from "react-icons/fa6";

const Job = ({image, title, location, days, skill}) => {
   const [click, setClick] = useState(false)
  return (
    <div className={styles.job}>
      <img src={image} alt="" />
       <div  className={styles.title}>
        <span style={{fontSize: "1.5vw"}}>{title}</span> <span className={styles.skill} >{skill}</span><br /><br />
        <span className={styles.location}><sub><IoLocationOutline style={{fontSize: "1.2vw"}} /></sub>  {location}</span>
        <span className={styles.time}><sub><CiCalendar style={{fontSize: "1.2vw"}}/></sub> {days} Days Remaining</span>
       </div>
       <div className={styles.left}>
      { !click ? <sub><FaRegBookmark onClick={()=>setClick(true)}  color='#BB362A' style={{fontSize: "1.4vw", cursor: "pointer"}}/> </sub> : <sub><FaBookmark onClick={()=>setClick(false)} color='#BB362A' style={{fontSize: "1.4vw", cursor: "pointer"}}/> </sub>} 
       <button>Apply Now  &nbsp;&#8594;</button>
       </div>
    </div>
  )
}

export default Job