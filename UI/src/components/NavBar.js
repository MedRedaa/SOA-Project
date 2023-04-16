import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.png';

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

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

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" id="logo" />
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#Interactive Games" className={activeLink === 'Interactive Games' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Interactive Games')}>Interactive Games</Nav.Link>
              <Nav.Link href="#Community" className={activeLink === 'Community' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Community')}>Community</Nav.Link>
              <Nav.Link href="#Inspiring Stories" className={activeLink === 'Inspiring Stories' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Inspiring Stories')}>Inspiring Stories</Nav.Link>
              <Nav.Link href="#Donation System" className={activeLink === 'Donation System' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Donation System')}>Donation System</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}