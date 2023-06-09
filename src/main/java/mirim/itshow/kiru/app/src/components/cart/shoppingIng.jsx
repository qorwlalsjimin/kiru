import React from 'react'
import "./cart.css"
import { Link } from "react-router-dom";

const shoppingIng = () => {
  return (
    <div>
   <Link to="/main"><button className='ing'><i className="ri-arrow-left-s-line"></i>쇼핑 계속하기</button></Link> 
    </div>
  )
}



export default shoppingIng
