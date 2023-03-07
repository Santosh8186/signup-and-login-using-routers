import React,{useState} from 'react'

const Login = () => {
    let [email,setEmail]=useState("")
    let [password,setPassword]=useState("")
    
    let handleSubmit=(e)=>{
        e.preventDefault()
        console.log({email,password});
    }
  return (
    <div>
        <h1>Login</h1>
        <form action="">
            <label htmlFor="email">Email</label>
            <br />
            <input type="text" id='email' onChange={(e)=>{
                setEmail(e.target.value)

            }} />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input type="password"  id='password' onChange={(e)=>{
                setPassword(e.target.value)

            }}/>
            <br />
            <button onClick={handleSubmit}>Login</button>
        </form>
    </div>
  )
}

export default Login