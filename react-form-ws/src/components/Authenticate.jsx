import React, {useState} from "react";



const Authenticate = ({token}) => {
  const [error, setError] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)
  const [iat, setIat] = useState(null)
  const handleClick = async () => {
    try{
      const response = await fetch(`https://fsa-jwt-practice.herokuapp.com/authenticate`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
      })
      const data = await response.json()
      console.log(data)
      setSuccessMessage(data.message)
      setIat(data.data.iat)
    }catch(error){
      setError(error.message)
    }
  }
  return(
    <>
      <h2>Authenticate</h2>
      {
        iat && <p>Logged in user: {iat}</p>
      }
      {
        successMessage && <p>{successMessage}</p>
      }
      {
        error && <p>{error}</p>
      }
      <button onClick={handleClick}>Authenticate token</button>
    </>
  )
}


export default Authenticate;