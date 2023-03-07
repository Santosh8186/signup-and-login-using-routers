import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Signup from './Signup'
import Nav from "./Nav.jsx"
import Login from './Login';
import Home from './Home';
import Pagenotfound from './Pagenotfound';

const App = () => {
  return (
    <div>
        <Router>
            <Nav/>
         <Routes>
            <Route path='/' element={<Home/>}>Home</Route>
            <Route path='/signup' element={<Signup/>}>Signup</Route>
            <Route path='/login' element={<Login/>}>Login</Route>
            <Route path='*' element={<Pagenotfound/>}>PageNotFound</Route>
         </Routes>
        </Router>
         
    </div>
  )
}

export default App