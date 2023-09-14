import NavBar from './components/NavBar/NavBar'
import StarBackdrop from './components/Backdrop/StarBackdrop'
import './App.css'

function App() {
  return (
    <div>

      <div>
        <StarBackdrop />
        <NavBar />
      </div>
      <h1>Hey There!</h1>
      <h1>My name is <a className='Purple'>Tristan</a>!</h1>
      <h2>Junior Software Engineer</h2>
      <h2>Take a look around my website if you would like to get to know a bit about me!</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore fugit, alias nam fugiat cumque accusamus. Non, deserunt. Blanditiis reiciendis quam soluta voluptatibus perspiciatis facere consequuntur beatae provident nostrum, dignissimos quis.</p>
    </div>
  )
}

export default App
