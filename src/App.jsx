import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import StarBackdrop from './components/Backdrop/StarBackdrop'
import Home from './components/pages/Home/Home'
import About from './components/pages/about/about'
import Projects from './components/pages/projects/projects'
import Resume from './components/pages/Resume/Resume'
import Contact from './components/pages/contact/contact'
import Footer from './components/footer/footer'


function App() {
  return (
    <div className='App'>
        <StarBackdrop />
        <NavBar />

        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/projects' element={<Projects />}/>
            <Route path='/resume' element={<Resume />}/>
            <Route path='/contact' element={<Contact />}/>
        </Routes>

        <Footer />
    </div>
  )
}

export default App
