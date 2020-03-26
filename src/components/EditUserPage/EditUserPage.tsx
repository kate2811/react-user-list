import React from 'react'
import { Link, useParams } from 'react-router-dom'
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

  return (
    <div>
      <h2>Edit user</h2>
      <UserForm onSave={editUser} user={user} />
      <Link to={'/'}>Go back</Link>
    </div>
  )
}

export default EditUserPage
