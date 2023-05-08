import React from 'react'
import {BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Login from './Login';
import Signup from './Signup'

const Loginpage = () => {
  return (
    <>
    <Login />
   <Signup />
</>
  )
}

export default Loginpage
