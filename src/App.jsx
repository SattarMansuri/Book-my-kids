import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './Pages/Login Page/LoginPage'
import LandingPage from './Pages/Landing page/LandingPage'
import Profile1Page from './Pages/profile1 page/Profile1Page'
import Profile2Page from './Pages/profile2 page/Profile2Page'
import JobPostPage from './Pages/job post page/JobPostPage'
import JobDescription from './components/job description/JobDescription'
import ActorsPage from './Pages/actors page/ActorsPage'
import ActorProfilePage from './Pages/actor profile page/ActorProfilePage'
import JobPost2Page from './Pages/Job post2 page/JobPost2Page'
import CommunityPage from './Pages/community page/CommunityPage'
import JobPostMainPage from './Pages/job post main page/JobPostMainPage'
import MakeProfileMainPage from './Pages/maike profile main page/MakeProfileMainPage'
import ShortlistPage from './Pages/shortlist page/ShortlistPage'
import AppliedPage from './Pages/applied page/AppliedPage'
import ProgressPage from './Pages/porogress page/ProgressPage'
import CompletedPage from './Pages/completed page/CompletedPage'
import DetailedActor from './components/detailed actor/DetailedActor'
import ProfilePage from './Pages/profile page/ProfilePage'

function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
     <Route path='/' element={<LandingPage/>}/>
     <Route path='/login' element={<LoginPage/>}/>
     <Route path='/profile1' element={<Profile1Page/>}/>
     <Route path='/profile2' element={<Profile2Page/>}/>
     <Route path='/jobpost' element={<JobPostPage/>}/>
     <Route path='/jobdescription' element={<JobDescription/>}/>
     <Route path='/actors' element={<ActorsPage/>}/>
     <Route path='/detailactor' element={<ActorProfilePage/>}/>
     <Route path='/jobpost2' element={<JobPost2Page/>}/>
     <Route path='/community' element={<CommunityPage/>}/>
     <Route path='/jobpostmain' element={<JobPostMainPage/>}/>
     <Route path='/makeprofilemain' element={<MakeProfileMainPage/>}/>
     <Route path='/shortlist' element={<ShortlistPage/>}/>
     <Route path='/applied' element={<AppliedPage/>}/>
     <Route path='/progress' element={<ProgressPage/>}/>
     <Route path='/completed' element={<CompletedPage/>}/>
     <Route path='/detailedprofile' element={<DetailedActor/>}/>
     <Route path='/profile' element={<ProfilePage/>}/>
     </Routes>
     </BrowserRouter>
  
    </>
  )
}

export default App
