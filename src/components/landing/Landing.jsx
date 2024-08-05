import React from 'react'
import styles from './Landing.module.css'
import Navbar from '../navbar/Navbar'
import surprised from '../../assets/surprised.png'
import garba from '../../assets/Garba dancers.png'
import clothing from '../../assets/Clothing.png'
import model from '../../assets/Model.png'
import tv from '../../assets/Tv.png'
import actor from '../../assets/actor.png'
import modelling from '../../assets/Modelling.png'
import voiceover from '../../assets/voiceover.png'
import Job from '../jobs/Job'
import Footer from '../footer/Footer'
import { useNavigate } from 'react-router-dom'


const Landing = () => {
  const navigate = useNavigate()
  return (
   <div className={styles.landing}>
    <Navbar/>
    <div className={styles.up}>
      <div className={styles.left}>
      <h2>Casting the Stars of Tomorrow</h2>
      <p>At Book My Kids, we discover and nurture young <br /> talent, connecting aspiring actors and models <br /> with opportunities to shine.</p>
      <button onClick={()=> navigate('/makeprofilemain')}>Join Now</button>
      </div>
      <div className={styles.right}>
        <img src={surprised} />
      </div>
    </div>
    <div className={styles.mid1}>
      <h2>Join Bookmykids and start your journey to stardom</h2>
      <p>Book My Kids is your premier casting platform dedicated to discovering and nurturing young talent. <br /> We connect aspiring child actors, models, and performers with top-tier auditions and casting <br /> opportunities in the entertainment industry. Our expert team ensures a seamless process from talent <br /> discovery to stardom, providing the support and resources needed for your child to shine. Join Book <br /> My Kids today and watch your child's dreams come to life on the big stage.</p>
    </div>
    <div className={styles.mid2}>
     <div className={styles.m2head}>
      <h2>Featured job</h2>
      <button onClick={()=>navigate('/jobpost')}>View All  &#8594;</button>
      </div>
      <div className={styles.job}>
        <Job title={"Garba Dancer"} skill={"Dancer"} location={"Mumbai"} days={6} image={garba}/>
        <Job title={"Clothing Commercial"} skill={"Acting"} location={"Delhi"} days={4} image={clothing}/>
        <Job title={"Model for Kids Bag Band"} skill={"Modelling"} location={"Pune"} days={4} image={model}/>
        <Job title={"Tv Series"} skill={"Acting"} location={"Mumbai"} days={4} image={tv}/>
      </div>
    </div>
    <div className={styles.mid3}>
      <p>Connect, collaborate, and grow with fellow actors, models, and <br /> creatives. Share insights, spark discussions, and forge valuable <br /> connections in our network. Elevate your craft and expand your <br /> horizons with like-minded artists today!</p>
      <button>Join our Community</button>
    </div>
    <div className={styles.mid4}>
      <div className={styles.m4head}>
      <h2>Need talent for your project? We've got you covered.
      </h2>
      <button onClick={()=>navigate('/actors')}>View All &#8594;</button>
      </div>
      <div className={styles.categories}>
        <div className={styles.category}>
        <span>Actors</span>
        <img src={actor} alt="Actor Image" />
        </div>
        <div className={styles.category}>
        <span>Models</span>
        <img src={modelling} alt="Model Image" />
        </div>
        <div className={styles.category}>
        <span>Voiceover <br /> Artists</span>
        <img style={{marginTop: '-11vh'}} src={voiceover} alt="Voiceover Artist" />
        </div>
      </div>
    </div>
    <div className={styles.mid5}>
      <p>Explore a world of talent for your project! From actors to models, voice- <br/>over artists, freelancers, and crew members, find your perfect fit to bring <br /> your project to life with flair and finesse.</p>
      <button onClick={()=>navigate('/jobpostmain')}>Post a Job</button>
    </div>
    <Footer/>
   </div>
  )
}

export default Landing