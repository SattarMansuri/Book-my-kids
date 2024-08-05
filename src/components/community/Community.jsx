import React from 'react'
import styles from './Community.module.css'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import profile from '../../assets/prifle.png'
import media from '../../assets/media.svg'
import event from '../../assets/event.svg'
import article from '../../assets/article.svg'
import staff from '../../assets/staff.svg'
import mooi from '../../assets/mooi.png'
import avni from '../../assets/avni.png'
import arjun from '../../assets/arjun.png'
import CommunityPost from '../community post/CommunityPost'

const Community = () => {
  const todos = [
    {
      id: 1,
      image: media,
      text: 'Media'
    },
    {
      id: 2,
      image: event,
      text: 'Event'
    },
    {
      id: 3,
      image: article,
      text: 'Article'
    },
    {
      id: 4,
      image: staff,
      text: 'Job Post'
    },
  ]
  const chats =[
    {
      id: 1,
      name: 'Rahul',
      msg: 'Hey! How are you?',
      time: '12:00 A.M.',
      date: '2/1/24'
    },
    {
      id: 2,
      name: 'Rima',
      msg: 'Any Update?',
      time: '12:00 A.M.',
      date: '2/1/24'
    },
    {
      id: 1,
      name: 'Chandni',
      msg: 'Audition at 5?',
      time: '12:00 A.M.',
      date: '2/1/24'
    },
    {
      id: 1,
      name: 'Khyati',
      msg: 'Thankyou!',
      time: '12:00 A.M.',
      date: '1/1/24'
    },
    {
      id: 1,
      name: 'Rishabh',
      msg: 'I might know someone',
      time: '12:00 A.M.',
      date: '1/1/24'
    },
  ]
  const posts =[
    {
      id: 1,
      image: mooi,
      name: 'Rishabh',
      comapny: 'Mooi Productions',
      date: '12 Jan 2024',
      likes: 37
    },
    {
      id: 2,
      image: avni,
      name: 'Avni',
      comapny: 'Model',
      date: '11 Jan 2024',
      likes: 224
    },
    {
      id: 3,
      image: arjun,
      name: 'Arjun',
      comapny: 'VS Productions',
      date: '11 Jan 2024',
      likes: 10
    }
  ]
  return (
    <div className={styles.community}>
      <Navbar />
      <div className={styles.comm}>
        <div className={styles.nav}>
          <img src={profile} alt="" />
          <input type="text" placeholder='Start a post' className={styles.post} />
         <div style={{display: 'flex', gap: '15vw'}}>
          {todos.map((element)=>(
             <div  key={element.id} className={styles.todo}>
             <img src={element.image} alt="" />
             <span>{element.text}</span>
           </div>
          ))}
         </div>
        </div>
        <div className={styles.feeds}>
          <div className={styles.left}>
            <h2>Conversations</h2><br /><br />
            <div>
              {chats.map((element)=>(
                <div key={element.id} className={styles.chat}>
                <h3>{element.name}</h3>
                <span>{element.msg}</span>
                <div className={styles.time}><span>{element.time}</span> <br /> <span>{element.date}</span></div>
              </div>
              ))}
            </div>
          </div>
          <div className={styles.right}>
            {posts.map((element)=>(
              <CommunityPost key={element.id} image={element.image} name={element.name} comapny={element.comapny} date={element.date} likes={element.likes} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Community