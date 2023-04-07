import React, { useContext } from 'react'
import logo from './frog-logo.svg'
import { useNavigate } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'
import '../stylesheets/NavBar.css'
import { myContext } from '../App'

const NavBar = () => {
  const navigate = useNavigate()
  const { loggedIn, setLoggedIn, url} = useContext(myContext);

  const handleLogout = () => {
    fetch(`${url}/logout`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => {
        if (data.error === true) {
          console.log(data);
        } else {
          setLoggedIn(data)
          navigate('/');
        }
      });
  }

  return (
    <Navbar bg="dark" variant="dark" className='navbar-main'>
      <Container>
        <Navbar.Brand onClick={() => navigate('/')}>
          <img src={logo} width='30' height='30' className='d-inline-block align-top' alt='frog logo' />
          Frogs Galore</Navbar.Brand>
        <Nav className="d-flex justify-content-end">
          {loggedIn.auth ? <Nav.Link onClick={() => handleLogout()}>Logout</Nav.Link> : <Nav.Link onClick={() => navigate('/login')}>Login</Nav.Link>}
          {loggedIn.auth ? <Nav.Link onClick={() => navigate('/personal')}>Personal Inventory</Nav.Link> : null}
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavBar