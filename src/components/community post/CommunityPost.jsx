import React, { useState } from 'react'
import styles from './CommunityPost.module.css'
import { IoIosHeart, IoIosHeartEmpty, IoMdShareAlt  } from "react-icons/io";
import { FaRegComment, FaRegBookmark, FaBookmark } from "react-icons/fa6";

const CommunityPost = ({name, comapny, date, likes, image}) => {
  const [like, setLike] = useState(false)
  const [save, setSave] = useState(false)
  return (
    <div className={styles.comm}>
      <div style={{display: 'flex'}}>
      <img src={image} />
      <div style={{marginLeft: '1vw'}}>
        <h2>{name}</h2>
       <p>{comapny}</p>
       <p>{date}</p>
      </div>
      </div><br /><br /><br /><br />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur a quo laborum fuga sit delectus praesentium earum sunt ratione alias. Pariatur placeat veniam alias a repudiandae, assumenda ab. Mollitia, nulla.</p><br />
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, et. Natus iusto, ratione quia molestiae rem, provident at eligendi aspernatur facere hic pariatur? Culpa, quibusdam consequuntur. Dicta beatae harum deserunt?</p><br /><br /><br /><br />
      <IoIosHeart style={{color: '#BB362A', fontSize: '1.5vw'}} /><span>Liked by {likes} people</span>
      <hr /><br /><br />
      <div className={styles.logos}>
      <div style={{cursor: 'pointer'}}>{!like ? <IoIosHeartEmpty onClick={()=>setLike(true)} style={{color: '#BB362A', fontSize: '1.5vw'}} /> : <IoIosHeart onClick={()=>setLike(false)}  style={{color: '#BB362A', fontSize: '1.5vw'}} />} <span>Like</span></div>
      <div style={{cursor: 'pointer'}}>
      <FaRegComment style={{color: '#BB362A', fontSize: '1.5vw'}} /> <span>Comment</span>
      </div>
      <div style={{cursor: 'pointer'}}>
      <IoMdShareAlt  style={{color: '#BB362A', fontSize: '1.5vw'}} /> <span>Share</span>
      </div>
      <div style={{cursor: 'pointer'}}>
      {!save ? <FaRegBookmark onClick={()=>setSave(true)} style={{color: '#BB362A', fontSize: '1.5vw'}} /> : <FaBookmark onClick={()=>setSave(false)}  style={{color: '#BB362A', fontSize: '1.5vw'}} />} <span>Save</span>
      </div>
      </div>
    </div>
  )
}

export default CommunityPost