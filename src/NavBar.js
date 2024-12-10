import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import './NavBar.css'



function NavBar() {

  const[header,setHeader]=useState(false);

  const scrollHeader=()=>{
    if(window.scrollY>=500){
      setHeader(true)
    }else{
      setHeader(false);
    }
  }

  window.addEventListener("scroll",scrollHeader)

  const navref=useRef();

  const showNav=()=>{
    navref.current.classList.toggle("ResNav");
    
  }

  

  return (
    <header class={header ? "active" : "flex"} ref={navref}>
        <h1 className="Name">Salasum</h1>
        <nav class="NavItems" >
            <a href="#1">Home</a>
            <a href="#2">About Us</a>
            <a href="#3">Services</a>
            <a href="#4">Contact Us</a>
            <button class="IconButton" onClick={showNav}>
              <FontAwesomeIcon icon={faBars}/>
            </button>
            <button class="X" onClick={showNav}>
            <FontAwesomeIcon icon={faXmark}/>
            </button>
        </nav>
    </header>
  )
}

export default NavBar