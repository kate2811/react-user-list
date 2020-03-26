import React from 'react'
import { useAddUser } from '../../modules/core/hooks'
import UserForm from '../UserForm'
import { Link } from 'react-router-dom'

const AddUserPage: React.FC = () => {
  const addUser = useAddUser()

  return (
    <div>
      <h2>Add user</h2>
      <UserForm onSave={addUser} />
      <Link to={'/'}>Go back</Link>
    </div>
  )
}

export default AddUserPage
