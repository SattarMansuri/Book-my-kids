import React from 'react'
import styles from './Progress.module.css'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import AnalyticsSidebar from '../analytics sidebar/AnalyticsSidebar'
import Stats from '../stats/Stats'
import AppliedPosts from '../applied post/AppliedPosts'

const Progress = () => {
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
          <AppliedPosts title={'Tv Commercial'} location={'Delhi'} description={'Seeking a charismatic child actos for a TV commercial. Must deliver lines naturally and convey emotions convincingly on cmaera.'} />
          <span style={{marginLeft: '1vw', fontSize: '.9vw'}}>70% complete</span>
         
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Progress