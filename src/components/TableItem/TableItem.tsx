import React from 'react'
import { Link } from 'react-router-dom'
import cx from 'classnames'
import { User } from '../../modules/core/types'

type Props = {
  user: User
  onRemove: () => void
}

const TableItem: React.FC<Props> = ({ user, onRemove }) => {
  const { name, surname, email, age, id } = user
  return (
    <tr>
      <td>{name}</td>
      <td>{surname}</td>
      <td>{email}</td>
      <td>{age}</td>
      <td>
        <button className={cx('btn', 'btn-sm', 'btn-light', 'mr-2')} onClick={onRemove} data-testid={'removeButton'}>
          Remove
        </button>
        <Link className={cx('btn', 'btn-sm', 'btn-light')} to={`/edit-user/${id}`}>
          Edit
        </Link>
      </td>
    </tr>
  )
}

export default TableItem
