import React from 'react'
import { useParams } from 'react-router-dom'
import { useEditUser, useUserById } from '../../modules/core/hooks'
import UserForm from '../UserForm'

const EditUserPage: React.FC = () => {
  const editUser = useEditUser()
  const { id } = useParams()
  if (!id) {
    throw new Error('no user id is provided')
  }
  const user = useUserById(id)
  if (!user) {
    throw new Error('user is not found')
  }

  return <UserForm onSave={editUser} user={user} />
}

export default EditUserPage
