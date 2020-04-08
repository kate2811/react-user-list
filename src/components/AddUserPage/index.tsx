import React from 'react'
import AddUserPage from './AddUserPage'
import { useAddUser } from '../../modules/core/hooks'

export default function() {
  const addUser = useAddUser()

  return <AddUserPage addUser={addUser} />
}
