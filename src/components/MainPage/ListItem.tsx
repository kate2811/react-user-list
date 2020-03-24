import React, { useCallback } from 'react'
import { useRemoveUser, useUserById } from '../../modules/core/hooks'
import { Link } from 'react-router-dom'

type Props = {
  id: string
}

const ListItem: React.FC<Props> = ({ id }) => {
  const removeUser = useRemoveUser()
  const user = useUserById(id)

  if (!user) {
    throw new Error('user is not found')
  }

  const { name, surname, email, age } = user
  const onRemove = useCallback(() => {
    removeUser(id)
  }, [id, removeUser])
  return (
    <li>
      {`${name} ${surname}, ${email}, ${age}`}
      <button onClick={onRemove}>remove</button>
      <Link to={`/edit-user/${id}`}>edit</Link>
    </li>
  )
}

export default ListItem
