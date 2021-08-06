import React from 'react'
import { ErrorMessage, useField } from 'formik'

export const TextField = ({ label, showErr, ...props }) => {
  const [field, meta] = useField(props)
  const errCls = meta.touched && meta.error ? 'is-invalid' : ''
  return (
    <div className='mb-3 row'>
      <label className='form-label col-form-label col-sm-3'>{label}</label>
      <div className='col-sm-9'>
        <input
          className={`form-control shadow-none ${errCls}`}
          {...field}
          {...props}
          autoComplete='off'
        />
        {showErr && (
          <ErrorMessage
            component='div'
            name={field.name}
            className='invalid-feedback'
          />
        )}
      </div>
    </div>
  )
}

export default TextField

// import React from 'react'
// import { Form } from 'react-bootstrap'
// import { useField } from 'formik'

// export const Textfield = ({ name, ...props }) => {
//   const [field, meta] = useField(name)

//   const configTextWidth = {
//     ...props,
//     ...field,
//     fullWidth: true,
//     variant: 'outlined'
//   }

//   if (meta && meta.touched && meta.error) {
//     configTextWidth.error = true
//     configTextWidth.helperText = meta.error
//   }
//   return <Form.Control {...configTextWidth} />
// }

// export default Textfield
