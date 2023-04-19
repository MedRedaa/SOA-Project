import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from '../assets/images/logo.png';
import { useState, useEffect } from "react";
const Navbar = () => {

    const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])
  const onShowLogin = () => {
    setShowLogin(true);
  }

  const onHideLogin = () => {
    setShowLogin(false);
  }
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    if (value === 'Community') {
      setShowLogin(true);
    } else {
      setShowLogin(false);
    }
  };

  return (
    <div className={scrolled ? "scrolled" : "nav"}>
        <Link className='pp' to="/" >
            <img className='logo' src={logo}/>
        </Link>
        <div className='pages'>
        <Link to="/home" className={scrolled ? "scrolled1 pp" : "pp"} >
            HOME
            </Link>
            <Link className={scrolled ? "scrolled2 pp" : "pp"} to="/test">
           COMMUNITY
            </Link>
            
            <Link className={scrolled ? "scrolled3 pp" : "pp"} to="/test2">
            GAME
            </Link>
            <Link className={scrolled ? "scrolled4 pp" : "pp"} to="/test2">
            STORY
            </Link>
            <div className={scrolled ? "scrolled5 sign" : "sign"}>
                <Link className={scrolled ? "scrolled6 SignUp" : "SignUp"}>
                    Sign Up
                </Link>
                <Link className='SignIn' to="/Login">
                
                    Sign In
                
                </Link>
            </div>
            
        </div>

    </div>
  )
}

export default Navbar;