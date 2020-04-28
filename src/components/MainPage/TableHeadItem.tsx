import React from 'react'
import { sortParams } from '../../modules/core/types'
import style from './MainPage.module.css'
import cx from 'classnames'

type Props = {
  name: string
  isSortable: boolean
  setSortParams: (newSortField: string) => void
  sortParams: sortParams
}

const TableHeadItem: React.FC<Props> = ({ name, isSortable, setSortParams, sortParams }) => {
  return (
    <>
      {isSortable ? (
        <th scope="col" onClick={() => setSortParams(name)} className={style.tableHead}>
          <span className={style.tableHead__title}>{name}</span>
          <i className="fas fa-sort" />
          {sortParams.field === name && (
            <i className={cx('fas', sortParams.direction === 'asc' ? 'fa-sort-down' : 'fa-sort-up')} />
          )}
        </th>
      ) : (
        <th scope="col" className={style.tableHead}>
          {name}
        </th>
      )}
    </>
  )
}

export default TableHeadItem
