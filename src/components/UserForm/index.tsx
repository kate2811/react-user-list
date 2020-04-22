import React from 'react'
import UserForm from './UserForm'
import { useRequiredAge } from '../../modules/core/hooks'
import { User, UserData } from '../../modules/core/types'

type Props = {
  onSave(userData: UserData): void
  user?: User
}
export default function({ onSave, user }: Props) {
  const requiredAge = useRequiredAge()
  return <UserForm onSave={onSave} user={user} requiredAge={requiredAge} />
}
