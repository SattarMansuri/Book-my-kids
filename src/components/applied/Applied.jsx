import React from 'react'
import styles from './Applied.module.css'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import AnalyticsSidebar from '../analytics sidebar/AnalyticsSidebar'
import Stats from '../stats/Stats'
import AppliedPosts from '../applied post/AppliedPosts'

const Applied = () => {
  return (
    <div className={styles.applied}>
      <Navbar />
      <div className={styles.main}>
        <AnalyticsSidebar />
        <div>
          <h2>Analytics</h2><br />
          <div style={{display: 'flex', gap: '9vw'}}>
          <Stats msg={"People Viewed your Profile"} />
          <Stats msg={"People Shortlisted your Profile"} />
          <Stats msg={"People Shared your Profile"} />
          </div><br /><br />
          <h2>Jobs Applied For</h2><br /><br />
          <div style={{marginLeft: '5vw'}}>
          <AppliedPosts title={'Music Video Kid'} location={'Delhi'} description={'Looking for a dynamic child performer for a music video. Must be able to dance and act in sync with the music and storyline.'} />
          <AppliedPosts title={'Model for Shoe Brand'} location={'Mumbai'} description={'Searching for an energetic child model for a shoe brand photoshoot. Must pose confidently and highlight the footwear.'} />
          <AppliedPosts title={'Actor for Health Drink Ad'} location={'Bangalore'} description={'Seeking an energetic child actor for a health drink commercial. Must convincingly show enjoyment refreshment'} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Applied