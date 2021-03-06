import React, { useCallback, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Age, User, UserData } from '../../modules/core/types'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import TextInput from './TextInput'
import cx from 'classnames'

type Props = {
  onSave(userData: UserData): void
  user?: User
  requiredAge: Age
}

const UserForm: React.FC<Props> = ({ onSave, user, requiredAge }) => {
  const validationSchema = useMemo(() => {
    return Yup.object({
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
        .min(requiredAge.min, 'User must be older than 0 year old')
        .max(requiredAge.max, 'User must be younger than 60 years old')
        .required('Required')
    })
  }, [requiredAge])

  const onSubmit = useCallback(
    (values: Omit<User, 'id'>) => {
      onSave(values)
    },
    [onSave]
  )

  return (
    <div>
      <Formik
        initialValues={user ? user : { name: '', surname: '', email: '', age: '' }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(props) => (
          <Form data-testid="form">
            <TextInput id="name" label="Name" name="name" type="text" />
            <TextInput id="surname" label="Surname" name="surname" type="text" />
            <TextInput id="email" label="Email" name="email" type="text" />
            <TextInput id="age" label="Age" name="age" type="number" />
            <div className={cx('d-flex', 'justify-content-between', 'mt-4')}>
              <button
                className={cx('btn', 'btn-primary', 'w-25')}
                type="submit"
                disabled={!(props.dirty && props.isValid)}
                data-testid="success-button"
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
