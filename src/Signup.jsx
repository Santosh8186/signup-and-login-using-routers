import React,{useState} from 'react'
// import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Signup = () => {

       let navigate=useNavigate()

    let [username,setUsername] =useState("")
    let [password,setPassword] =useState("")
    let [email,setEmail] =useState("")
    let [gender,setGender]=useState("")

    let handleSubmit=(e)=>{
        e.preventDefault()
        console.log({username,password,email,gender});
        localStorage.setItem("username",username)
        localStorage.setItem("password",password)   
        localStorage.setItem("email",email)
        localStorage.setItem("gender",gender)
        navigate("./login")
    }
  return (
    <div>
        <h1>Signup</h1>
        <form action="">
            <label htmlFor="username">Username :</label>
            <br />
            <input type="text" id="username"  onChange={(e)=>{
                setUsername(e.target.value)

            }}/>
            <br />
            <label htmlFor="password" >Password</label>
            <br />
            <input type="password" id='password' onChange={(e)=>{
                setPassword(e.target.value)

            }}/>
            <br />
            <label htmlFor="email">Email</label>
            <br />
            <input type="text" id='email' onChange={(e)=>{
                setEmail(e.target.value)
            }}/>
            <br />
            <label htmlFor="gender">Gender</label>
            <input type="radio" name="abc" id="gender" value="male" onChange={(e)=>{
                setGender(e.target.value)

            }}/>Male
            <input type="radio" name='abc' id="gender" value="female" onChange={(e)=>{
                setGender(e.target.value)

            }}/>Female
            <br />
            {/* <Link to="/login" onClick={handleSubmit}><button>Submit</button></Link> */}
            <button onClick={handleSubmit}>Submit</button>
            
        </form>
    </div>
  )
}

export default Signup