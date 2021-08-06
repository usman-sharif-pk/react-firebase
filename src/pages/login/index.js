/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import Signin from '../../components/signin'
import { useHistory } from 'react-router-dom'

const Login = ({ currentUser }) => {
  const history = useHistory()

  useEffect(() => {
    if (currentUser) {
      history.push('/')
    }
  }, [currentUser])

  return (
    <div>
      <h3 className='d-flex justify-content-center'>Login</h3>
      <Signin />
    </div>
  )
}

Login.defaultProps = { currentUser: null }

export default Login
