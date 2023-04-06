import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'
import '../stylesheets/NavBar.css'

const NavBar = () => {
  const navigate = useNavigate()
  return (
       <Navbar bg="dark" variant="dark" className='navbar-main'>
        <Container>
          <Navbar.Brand onClick={() => navigate('/')}>MacroCenter</Navbar.Brand>
          <Nav className="d-flex justify-content-end">
            <Nav.Link onClick={() => navigate('/login')}>Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default NavBar