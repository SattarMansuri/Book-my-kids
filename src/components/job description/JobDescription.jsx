import React from 'react'
import styles from './JobDescription.module.css'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

const JobDescription = () => {
  return (
   <div className={styles.jd}>
    <Navbar/>
    <div className={styles.job}>
      <h2>Job Title</h2>
      <span>Posted on 10/06/2024</span><br /><br />
      <hr /><br /><br />
      <h3>About Project</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda dicta distinctio omnis perspiciatis? Tempore inventore repudiandae sed quisquam eligendi voluptas eum in ex, a, illum quos doloribus. Veniam dolore similique accusantium numquam dolorem voluptatibus, animi cumque explicabo accusamus pariatur eos molestiae labore laudantium, deleniti tenetur sint? Quia, quasi illum laudantium, voluptas illo fugiat debitis, inventore sequi nulla voluptates doloribus! Vitae porro unde omnis illo? Repellendus aspernatur ipsa, nulla at dolorum optio voluptatibus quibusdam nesciunt earum reprehenderit vero modi harum distinctio perspiciatis libero ex dignissimos error id reiciendis debitis qui nam quo autem nemo. Sit expedita neque, officia nostrum culpa ducimus.</p><br /><br />
      <hr /><br /><br />
      <h3>Your Role</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero error molestias optio vitae perferendis quos autem esse debitis eveniet consectetur, id impedit adipisci quas natus! Placeat alias enim amet esse cupiditate voluptas eligendi voluptatum qui omnis soluta? Sit assumenda, deleniti libero aperiam eius doloribus unde nihil exercitationem natus incidunt dolorum harum velit! Reiciendis, alias pariatur odit facere blanditiis saepe tenetur earum vero consequatur ex architecto perspiciatis voluptates quo ab quos cumque. Enim itaque quasi ex aperiam exercitationem aut laboriosam rerum voluptate cupiditate necessitatibus quod libero, mollitia ab atque aspernatur facere veniam at? Veniam quisquam, recusandae eligendi vel repellat numquam assumenda.
        <br /><br />
        <span style={{color: '#BB362A'}}>Skills Required</span>
        </p><br /><br />
      <hr /><br /><br />
      <h3>Company Details</h3>
      <span style={{color: '#BB362A'}}>Name of Comapnay</span> : <span>Talent</span><br />
      <span style={{color: '#BB362A'}}>Recruiter/Owner</span> : <span>Rahul Singh</span><br /><br />
      Member since <span style={{color: '#BB362A'}}>2022</span> &nbsp; Verified User &nbsp; <span style={{color: '#BB362A'}}>08</span>Jobs Posted &nbsp; <span style={{color: '#BB362A'}}>03</span>Hired 
      <br /><br />
      <hr /><br /><br />
      <span style={{color: '#BB362A'}}>Location</span> <span className={styles.hyp}>:</span> <span className={styles.ans}>Mumbai</span><br />
      <span style={{color: '#BB362A'}}>Start By </span> <span className={styles.hyp}>:</span> <span className={styles.ans}>10/07/2024</span> <br />
      <span style={{color: '#BB362A'}}>Duration</span> <span className={styles.hyp}>:</span> <span className={styles.ans}>6 Months</span> <br />
      <span style={{color: '#BB362A'}}>Compensation</span> <span className={styles.hyp}>:</span> <span className={styles.ans}> - </span> <br />
      <span style={{color: '#BB362A'}}>Other Facilities</span> <span className={styles.hyp}>:</span> <span className={styles.ans}> - </span> <br />
      <span style={{color: '#BB362A'}}>Website</span> <span className={styles.hyp}>:</span> <span className={styles.ans}>Talentfortalent.in</span> <br /><br />
      <button>Apply Now</button> <button style={{marginLeft: '3vw'}}>Shortlist</button>
    </div>
    <Footer />
   </div>
  )
}

export default JobDescription