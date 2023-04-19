import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../assets/images/logo.png';


const NavBar = () => {

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
    <>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" id="logo" />
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <Link to="/home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Link>
              <Link to="/Interactive Games" className={activeLink === 'Interactive Games' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Interactive Games')}>Interactive Games</Link>
              <Link to="/Login" className={activeLink === 'Community' ? 'active navbar-link' : 'navbar-link'} onClick={() => {onUpdateActiveLink('Community'); onShowLogin();}}>Community</Link>
              <Link to="/Inspiring Stories" className={activeLink === 'Inspiring Stories' ? 'active navbar-link' : 'navbar-link'} onClick={() => {onUpdateActiveLink('Inspiring Stories'); onHideLogin();}}>Inspiring Stories</Link>
              <Link to="/Donation System" className={activeLink === 'Donation System' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Donation System')}>Donation System</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      </>   
  )
}

export default NavBar;