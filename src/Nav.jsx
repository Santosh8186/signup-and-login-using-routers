import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div style={{display:"flex", border:"2px solid red", justifyContent:"space-between", width:"1000px",backgroundColor:"blueviolet"}}>
     <div>
        <img src="https://static.vecteezy.com/system/resources/previews/007/688/840/original/education-logo-free-vector.jpg" alt="" width="50px"/>
     </div>
     <div>
        <ul style={{display:"flex",justifyContent:"space-around", width :"300px"}}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
     </div>
    </div>
  )
}

export default Nav