import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { User, UserData } from '../../modules/core/types'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import TextInput from './TextInput'
import cx from 'classnames'

type Props = {
  onSave(userData: UserData): void
  user?: User
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
        {(props) => (
          <Form>
            <TextInput id="name" label="Name" name="name" placeholder="name" type="text" />
            <TextInput id="surname" label="Surname" name="surname" placeholder="surname" type="text" />
            <TextInput id="email" label="Email" name="email" placeholder="email" type="text" />
            <TextInput id="age" label="Age" name="age" placeholder="age" type="number" />
            <div className={cx('d-flex', 'justify-content-between', 'mt-4')}>
              <button
                className={cx('btn', 'btn-primary', 'w-25')}
                type="submit"
                disabled={!(props.dirty && props.isValid)}
              >
                Save
              </button>
              <Link className={cx('btn', 'btn-dark', 'w-25')} to={'/'}>
                Go back
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default UserForm
