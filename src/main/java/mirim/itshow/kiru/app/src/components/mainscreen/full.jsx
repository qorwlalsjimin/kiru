import React from 'react'
import "./mainscreen.css"
import {useEffect, useRef } from "react";


const full = () => {
    const outerDivRef = useRef();
    return (
      <div ref={outerDivRef} className="outer">
        <div className="inner bg-yellow">1</div>
        <div className="inner bg-blue">2</div>
        <div className="inner bg-pink">3</div>
      </div>
  )
}

export default full