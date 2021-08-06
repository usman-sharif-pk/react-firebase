import { Button, Card } from 'react-bootstrap'
import React, { useState } from 'react'
import { Form, Formik } from 'formik'
import * as yup from 'yup'
import { useHistory, Link } from 'react-router-dom'

import { auth, signInWithGoogle } from '../../utils'

import TextField from '../formUI/textfield'

const initialValues = { email: '', password: '' }
const FORM_VALICATION_SCHEMA = yup.object().shape({
  email: yup
    .string()
    .email('Invalid Email')
    .required('Required!'),
  password: yup.string().required('Required')
})

const Signin = () => {
  const [errors, setErrors] = useState([])
  const history = useHistory()

  const handleSubmit = async ({ email, password }) => {
    try {
      await auth.signInWithEmailAndPassword(email, password)
      history.push('/')
    } catch (e) {
      const message =
        e.code === 'auth/user-not-found' || e.code === 'auth/wrong-password'
          ? 'Invalid credientials'
          : e.message

      setErrors([message])
      console.log(e)
    }
  }

  return (
    <div className='d-flex justify-content-center'>
      <Card style={{ width: '50%' }}>
        <Card.Body>
          {errors.map((err, i, arr) => {
            return (
              <div key={i} className={`row ${arr.length - 1 === i && 'mb-3'}`}>
                <div className='col-sm-3'></div>
                <div className='col-sm-9'>
                  <span key={i} className='text-danger'>
                    {err}
                  </span>
                </div>
              </div>
            )
          })}
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={FORM_VALICATION_SCHEMA}
          >
            <Form>
              <TextField label='Email' name='email' showErr />
              <TextField name='password' label='Password' type='password' />
              <div className='d-grid gap-2'>
                <Button type='submit' size='lg'>
                  Sign In
                </Button>
                <Button variant='danger' size='lg' onClick={signInWithGoogle}>
                  <i className='fab fa-google'></i> Sign In with Google
                </Button>
              </div>
            </Form>
          </Formik>
          <p className='d-flex justify-content-center mt-3'>
            Forget password? cliek <Link to='/recovery'>here</Link>.
          </p>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Signin
