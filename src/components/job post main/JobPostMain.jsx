import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './JobPostMain.module.css'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import Talent from '../talent/Talent'
import thank from '../../assets/Thank You.svg'
import actor from '../../assets/Theatre Mask.svg'
import dress from '../../assets/Dress 1.svg'
import mic from '../../assets/Microphone.svg'
import reel from '../../assets/Reel_1 1.svg'
import { CiSquareChevLeft, CiSquareChevRight  } from "react-icons/ci";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {EffectCoverflow, Pagination, Navigation} from 'swiper/modules';

const JobPostMain = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.job}>
      <Navbar />
      <div className={styles.main}>
        <h2 className={styles.title}>Post a Job and Discover Exceptional Talent!</h2>
        <p>Seeking the perfect fit for your next project? Post your job here to access a diverse network of talented actors, models, voice-over artists, and creative professionals. Our platform streamlines the hiring process, ensuring you find the ideal match to bring your vision to life. Start your search today!</p>
        <div className={styles.ques}>
        What type of talent are you looking for?
        </div>
<div className={styles.category}>
   <Swiper
   effect={'coverflow'}
   grabCursor={true}
   centeredSlides={true}
   loop={true}
   slidesPerView={5}
   spaceBetween={100}
   coverflowEffect={{
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5
   }}
   pagination={{ el: '.swiper-pagination', clickable: true }}
navigation={{
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
  clickable: true,
}}
modules={[EffectCoverflow, Pagination, Navigation]}
className={styles.swiper}
   >
      <SwiperSlide className={styles.slides}>
          <Talent className={styles.slide} image={dress} title={'Model'} text={'Find the face of your campaign'}/>
      </SwiperSlide>
      <SwiperSlide className={styles.slides}>
          <Talent className={styles.slide} image={actor} title={'Actor'} text={'Discover the stars for your screen'}/>
      </SwiperSlide>
      <SwiperSlide className={styles.slides}>
          <Talent className={styles.slide} image={thank} title={'Performer'} text={'Find dynamic talent for stage'}/>
      </SwiperSlide>   
      <SwiperSlide className={styles.slides}> 
          <Talent className={styles.slide} image={mic} title={'Voiceover Artists'} text={'Find the ideal voice'}/>
      </SwiperSlide>
      <SwiperSlide className={styles.slides}>    
          <Talent className={styles.slide} image={reel} title={'Influencers & Content Creators'} text={'Connect with impactful voices and creative minds.'}/>
      </SwiperSlide> 
      <CiSquareChevLeft className='swiper-button-prev' />  
      <CiSquareChevRight className='swiper-button-next' />
      </Swiper>
        </div>
        <div className={styles.else}>
          Looking for something else?
        </div><br />
        <button className={styles.other}>Other</button><br />
        <button onClick={()=> navigate('/jobpost2')} className={styles.next}>Next</button>
      </div>
      <Footer />
    </div>
  )
}

export default JobPostMain