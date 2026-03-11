import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>My Daily Habits</h1>
      <p>Gerencie seus habitos diarios de forma simples e visual</p>

      <Footer/>
    </div>
  )
}

export default App
