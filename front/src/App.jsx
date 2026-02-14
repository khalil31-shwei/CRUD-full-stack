import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './forms.css'
import Inputs from './forms.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Inputs />
    </>
  )
}

export default App
