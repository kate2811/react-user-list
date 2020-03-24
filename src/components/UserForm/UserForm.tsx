import React, { ChangeEvent, useCallback, useState } from 'react'
import style from './UserForm.module.scss'
import { Link } from 'react-router-dom'
import { User, UserData } from '../../modules/core/types'

type Props = {
  onSave(userData: UserData): void
  user?: User
}

const UserForm: React.FC<Props> = ({ onSave, user }) => {
  const [userData, setUserData] = useState(
    user
      ? user
      : { name: '', surname: '', email: '', age: '' }
  )

  const onInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setUserData({
        ...userData,
        [e.target.name]: e.target.value
      })
    }, [setUserData, userData]
    )

  const onSaveClick = useCallback(
    (e) => {
      e.preventDefault()
      onSave(userData)
    },
    [onSave, userData]
  )

  return (
    <div>
      <div>
        <h2>Edit profile</h2>
        <form className={style.form}>
          <input name="name" type="text" required={true} onChange={onInputChange} value={userData.name} />
          <input name="surname" type="text" required={true} onChange={onInputChange} value={userData.surname} />
          <input name="email" type="text" required={true} onChange={onInputChange} value={userData.email} />
          <input name="age" type="text" required={true} onChange={onInputChange} value={userData.age} />
          <button onClick={onSaveClick}>Save</button>
        </form>
        <Link to={'/'}>Go back</Link>
      </div>
    </div>
  )
}

export default UserForm
