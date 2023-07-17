import React, {useState} from 'react'
import './App.css'
import Authenticate from './components/Authenticate'
import SignUpForm from './components/SignUpForm'

const App = () => {
const [token, setToken] = useState(null)

  return (
    <div className='content-box'>
      <SignUpForm token={token} setToken={setToken}/>
      <Authenticate token={token} setToken={setToken}/>
    </div>
  )
}

export default App
