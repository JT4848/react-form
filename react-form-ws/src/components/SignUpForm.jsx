import React,{useState} from "react";


const SignUpForm = ({setToken}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

const handleSubmit = async (event) => {
  event.preventDefault();
  try{
    const response = await fetch(`https://fsa-jwt-practice.herokuapp.com/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application.json',
      },
      body: JSON.stringify({username, password})
    })
    const data = await response.json()
    console.log(data)
    setToken(data.token)
  }catch(error){
    setError(error.message)
  }
}
  return(
    <>
      <h2>Sign up</h2>
      {
        error && <p>{error}</p>
      }
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label>
          Username: <input placeholder="type here" value={username} onChange={(event) => setUsername(event.target.value)}/>
          </label>
          <label>
          Password: <input placeholder="type here" value={password} onChange={(event) => setPassword(event.target.value)}/>
          </label>
          <button>Submit</button>
        </form>
      </div>
    </>
  )
}


export default SignUpForm;