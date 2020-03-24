import React from 'react'
import { useAddUser } from '../../modules/core/hooks'
import UserForm from '../UserForm'

const AddUserPage: React.FC = () => {
  const addUser = useAddUser()

  return <UserForm onSave={addUser} />
}

export default AddUserPage
