import React, { useCallback } from 'react'
import { useRemoveUser, useUserById } from '../../modules/core/hooks'
import { Link } from 'react-router-dom'
import cx from 'classnames'

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
    <tr>
      <td>{name}</td>
      <td>{surname}</td>
      <td>{email}</td>
      <td>{age}</td>
      <td>
        <button className={cx('btn', 'btn-sm', 'btn-light', 'mr-2')} onClick={onRemove}>
          Remove
        </button>
        <Link className={cx('btn', 'btn-sm', 'btn-light')} to={`/edit-user/${id}`}>
          Edit
        </Link>
      </td>
    </tr>
  )
}

export default ListItem
