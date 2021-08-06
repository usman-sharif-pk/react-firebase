import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'

import { auth } from '../../utils'

const LoggedInUserLinks = () => {
  const history = useHistory()
  const handleLogout = () => {
    auth.signOut()
    history.push('/')
  }
  return (
    <Nav>
      <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
    </Nav>
  )
}

const LoggedOutUserLinks = () => {
  return (
    <Nav>
      <Nav.Link as={NavLink} to='/registration' activeClassName='active'>
        Register
      </Nav.Link>
      <Nav.Link as={NavLink} to='/login' activeClassName='active'>
        Login
      </Nav.Link>
    </Nav>
  )
}

const Header = ({ currentUser, ...rest }) => {
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Navbar.Brand as={Link} to='/'>
          React Firebase and Graphql
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link as={NavLink} to='/' activeClassName='active'>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to='/login'>
              Link
            </Nav.Link>
          </Nav>
          {currentUser ? <LoggedInUserLinks /> : <LoggedOutUserLinks />}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

Header.defaultProps = { currentUser: null }

const mapDispatchToProps = dispatch => {
  return {}
}

const mapStateToProps = ({ user, ...rest }) => {
  return { currentUser: user.currentUser }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
