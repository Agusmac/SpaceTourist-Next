import React, { useState, useEffect } from 'react'

import Link from 'next/link'


const Navbar = ({ backImg }) => {

  const [expanded, setExpanded] = useState(false)

  const Hamburguer = "/assets/shared/icon-hamburger.svg"
  const Cross = "/assets/shared/icon-close.svg"


  return (
    <div>
   
      <div className='flex navigator'>
        <img src="/assets/shared/logo.svg" alt="icon" style={{ height: "50%" }} />
        <div className='navHrDiv slide-in-left'><hr /></div>
        <img src={expanded ? Cross : Hamburguer} className={`burguer ${expanded ? "" : "wobble-ver-right"}`} alt="icon" onClick={() => setExpanded(!expanded)} />

        <div className={`navbar flex ${expanded ? "display" : "displaynone"}`}>
        
            <Link href="/">
              <div className={`NavText navlistdiv slide-in-right2 ${backImg === "home" && "underlined"}`} onClick={() => setExpanded(false)}>
                <span>00</span>  Home
              </div>
            </Link>
            <Link href="/destination">
              <div className={`NavText navlistdiv slide-in-right2 ${backImg === "destination" && "underlined"}`} onClick={() => setExpanded(false)}>
                <span>01</span>  Destination
              </div>
            </Link>
            <Link href="/crew">
              <div className={`NavText navlistdiv slide-in-right2  ${backImg === "crew" && "underlined"}`} onClick={() => setExpanded(false)}>
                <span>02</span>  Crew
              </div>
            </Link>
            <Link href="/technologies">
              <div className={`NavText navlistdiv slide-in-right2  ${backImg === "technology" && "underlined"}`} onClick={() => setExpanded(false)}>
                <span>03</span>  Technologies
              </div>
            </Link>
        
        </div>
      </div>
    </div>
  )
}

export default Navbar