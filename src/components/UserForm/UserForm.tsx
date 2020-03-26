import React from 'react'
import { useHistory } from 'react-router-dom'
import style from './UserForm.module.scss'
import { User, UserData } from '../../modules/core/types'
import { Formik, Form, useField } from 'formik'
import * as Yup from 'yup'

type Props = {
  onSave(userData: UserData): void
  user?: User
}

const MyTextInput = ({ ...props }) => {
  // @ts-ignore
  const [field, meta] = useField(props)
  return (
    <>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </>
  )
}


const UserForm: React.FC<Props> = ({ onSave, user }) => {
  const history = useHistory()

  return (
    <div>
      <Formik
        initialValues={user ? user : { name: '', surname: '', email: '', age: '' }}
        validationSchema={Yup.object({
          name: Yup.string()
            .matches(/^[a-zA-Z\s]*$/, 'User name must contain only characters')
            .required('Required'),
          surname: Yup.string()
            .matches(/^[a-zA-Z\s]*$/, 'User surname must contain only characters')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          age: Yup.number()
            .moreThan(0, 'User must be older than 0 year old')
            .lessThan(60, 'User must be younger than 60 years old')
            .required('Required')
        })}
        onSubmit={(values) => {
          history.push('/')
          onSave(values)
        }}
      >
        <Form className={style.form}>
          <MyTextInput name='name' placeholder='name' type='text'/>
          <MyTextInput name='surname' placeholder='surname' type='text'/>
          <MyTextInput name='email' placeholder='email' type='text'/>
          <MyTextInput name='age' placeholder='age' type='number'/>
          <button type="submit">Save</button>
        </Form>
      </Formik>
    </div>
  )
}

export default UserForm
