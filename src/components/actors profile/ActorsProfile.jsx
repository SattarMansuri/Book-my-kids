import React from 'react'
import { useState } from 'react';
import styles from './ActorsProfile.module.css'
import { FaRegBookmark, FaBookmark } from "react-icons/fa6";
import { IoShareSocialSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const ActorsProfile = ({role, name, location, age, height, weight, gender, profile}) => {
  const [book, setBook] = useState(false)
  const navigate = useNavigate()
  return (
    <div className={styles.actorpro}>
      <img src={profile}/>
      <div className={styles.info}>
       <div className={styles.role}>
        {role.map((element)=>(
          <span>{element}</span>
        ))}
       </div><br />
       <h2>{name}</h2>
       <span>{location}</span>
       <div className={styles.details}>
        <span><b>{age}</b> Yrs</span> <span><b>{height}</b> Cm.</span> <span><b>{weight}</b> Kg.</span> <span><b>{gender}</b></span>
       </div>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, numquam ratione, quas magni ullam ad, voluptatum debitis natus explicabo veniam ea exercitationem voluptatem! Reiciendis, possimus!</p>
       <u onClick={(e)=>{navigate('/detailedprofile', {state:{
        name: name,
        role: role,
        profile: profile,
        location: location,
        age: age,
        height: height,
        weight: weight,
        gender: gender
       }})
        console.log(state)
       }}>View Profile</u>
       <div className={styles.bookmark}>{!book ? <FaRegBookmark onClick={()=>setBook(true)} /> : <FaBookmark onClick={()=>setBook(false)} />}</div>
      <IoShareSocialSharp className={styles.share}/>
      </div>
    </div>
  )
}

export default ActorsProfile