import React from 'react'
import { useState } from 'react'
import UserContext from '../context/UserContext'

function HandleSubmit() {

}
function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [setUser] = useContext(UserContext)



  return (
    <div>
        <h1>Login</h1>
          <input 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text" placeholder="Username" />
          <input 
        value={password}
      onChange={(e) => setPassword(e.target.value)}
      type="password" placeholder="Password" />
       <button type="submit" onClick={HandleSubmit}>submit</button>
    </div>
  )
}

export default Login