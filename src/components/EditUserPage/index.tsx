import React from 'react'
import { useEditUser, useUserById } from '../../modules/core/hooks'
import EditUserPage from './EditUserPage'
import { useParams } from 'react-router-dom'

export default function() {
  const editUser = useEditUser()
  const { id } = useParams()
  if (!id) {
    throw new Error('no user id is provided')
  }
  const user = useUserById(id)
  if (!user) {
    throw new Error('user is not found')
  }

  return <EditUserPage editUser={editUser} user={user} />
}
