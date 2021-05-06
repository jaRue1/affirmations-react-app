import React from 'react'
import LoginButton from './LoginButton'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-bootstrap'
function Header() {
  return (
    <>
    <Navbar className='justify-content-between'>
      <Navbar.Brand>Affirmations</Navbar.Brand>
      <Nav>
        <NavLink>+</NavLink>
        <NavLink><LoginButton/></NavLink>
      </Nav>
    </Navbar>
    </>
  )
}
export default Header