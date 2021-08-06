import React, { useState } from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

import { PASSWORD_REDIRECT_URL } from '../../config'
import { auth } from '../../utils'

const PasswordRecorvery = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const history = useHistory()

  const handleSubmit = async e => {
    e.preventDefault()
    console.log(email)

    try {
      //   const config = { url: PASSWORD_REDIRECT_URL }
      await auth.sendPasswordResetEmail(email, { url: PASSWORD_REDIRECT_URL })
      history.push('/login')
    } catch (e) {
      setError('Email not found, please try again')
    }
  }

  return (
    <div className='d-flex justify-content-center mt-5'>
      <Card style={{ width: '50%' }}>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='email'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                name='email'
                className='shadow-none'
                autoComplete='off'
                value={email}
                required
                onChange={e => setEmail(e.target.value)}
              />
            </Form.Group>
            {error && (
              <div className='row mb-3'>
                <div className='col-sm-12 text-danger'>{error}</div>
              </div>
            )}
            <div className='d-grid'>
              <Button type='submit' size='lg' className='shadow-none'>
                Email password
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}

export default PasswordRecorvery
