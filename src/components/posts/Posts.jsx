import React, { useState } from 'react'
import styles from './Posts.module.css'
import { FaRegBookmark, FaBookmark } from "react-icons/fa6";
import { IoShareSocialSharp } from "react-icons/io5";

const Posts = ({title, location, description}) => {
  const [book, setBook] = useState(false)
  return (
    <div className={styles.posts}>
      <h2>{title}</h2>
      <span>{location}</span>
      <p>{description}</p>
      <span style={{fontWeight: "500"}}>Apply By-</span> <span style={{color: '#000000'}}>20 Jan 20xx</span>
      <button onClick={(e)=>console.log(e)}>Apply</button>
      <div className={styles.bookmark}>{!book ? <FaRegBookmark onClick={()=>setBook(true)} /> : <FaBookmark onClick={()=>setBook(false)} />}</div>
      <IoShareSocialSharp className={styles.share}/>
    </div>
  )
}

export default Posts