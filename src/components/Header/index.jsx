import React, {useContext} from 'react'
import { UserAuthContext } from '../../App'
import LoginButton from './LoginButton'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-bootstrap'
function Header() {
  const { user } = useContext(UserAuthContext)
  return (
    <>
    <Navbar className='justify-content-between'>
      <Navbar.Brand>Affirmations</Navbar.Brand>
      <Nav>
        {user && <NavLink>+</NavLink>}&nbsp;
        <NavLink><LoginButton/></NavLink>
      </Nav>
    </Navbar>
    </>
  )
}
export default Header