import React, {useContext , useState} from 'react'
import { UserAuthContext } from '../../App'
import LoginButton from './LoginButton'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-bootstrap'
import PostNew from '../PostNew'
// Styles
import './header.css'
function Header() {
  const { user } = useContext(UserAuthContext)
  const [showModal, setShowModal] = useState(false)
  return (
    <>
    <Navbar className='justify-content-between navbar'>
      <Navbar.Brand>Affirmations</Navbar.Brand>
      <Nav>
        {user && <button onClick={() => setShowModal(true)}>+</button>}&nbsp;
        <NavLink><LoginButton/></NavLink>
      </Nav>
    </Navbar>
    <PostNew show={showModal} onHide={()=> setShowModal(false)} />
    </>
  )
}
export default Header