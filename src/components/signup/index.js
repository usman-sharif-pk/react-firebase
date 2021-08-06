import { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import * as yup from 'yup'
import { Formik, Form } from 'formik'
import { useHistory } from 'react-router-dom'
import TextField from '../formUI/textfield'
import { auth, handleUserProfile } from '../../utils'

const initialState = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}
// const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/ // /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
const FORM_VALICATION_SCHEMA = yup.object().shape({
  displayName: yup
    .string()
    .min(3, 'Minimum 3 Characters')
    .required('Required'),
  email: yup
    .string()
    .email('Invalid Email')
    .required('Required!'),
  password: yup
    .string()
    // .matches(
    //   passwordRegex,
    //   'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number, one special case Character, and no white spaces'
    // )
    .required('Required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Password Does not match')
    .required('Required!')
})

const Signup = () => {
  const [errors, setErrors] = useState([])
  const history = useHistory()
  const handleSubmit = async (values, funcs) => {
    console.log('values', values, 'funcs', funcs)

    const { email, password, displayName } = values

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      )
      const userRef = await handleUserProfile(user, { displayName })
      console.log('userRef is ++++', userRef)
      history.push('/')
    } catch (e) {
      setErrors([...errors, e.message])
    }
  }

  return (
    <div className='d-flex justify-content-center mt-5'>
      <Card style={{ width: '50%' }}>
        <Card.Header>
          <Card.Title>Register</Card.Title>
        </Card.Header>
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
            onSubmit={handleSubmit}
            initialValues={initialState}
            validationSchema={FORM_VALICATION_SCHEMA}
          >
            <Form noValidate>
              <TextField label='Display Name' name='displayName' />
              <TextField label='Email' name='email' type='email' showErr />
              <TextField
                label='Password'
                name='password'
                type='password'
                showErr
              />
              <TextField
                label='Confirm Password'
                name='confirmPassword'
                type='password'
                showErr
              />

              <div className='d-grid gap-2'>
                <Button type='submit' size='lg'>
                  Register
                </Button>
              </div>
            </Form>
          </Formik>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Signup
