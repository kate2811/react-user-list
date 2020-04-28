import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import TableItem from '../TableItem'
import PageLayout from '../PageLayout'
import Loader from 'react-loader-spinner'
import style from './MainPage.module.css'
import cx from 'classnames'
import SearchForm from '../SearchForm'
import { sortParams } from '../../modules/core/types'
import TableHeadItem from './TableHeadItem'

type Props = {
  isLoading: boolean
  userIdList: string[] | null
  setSortParams: (newSortField: string) => void
  sortParams: sortParams
}

const MainPage: React.FC<Props> = ({ isLoading, userIdList, setSortParams, sortParams }) => {
  const tableHeadItems = useMemo(() => {
    return [
      {
        title: 'name',
        isSortable: true
      },
      {
        title: 'surname',
        isSortable: true
      },
      {
        title: 'email',
        isSortable: false
      },
      {
        title: 'age',
        isSortable: true
      },
      {
        title: 'actions',
        isSortable: false
      }
    ]
  }, [])

  return (
    <PageLayout title={'User list'}>
      {isLoading ? (
        <div className={cx(style.spinner, 'mx-auto')}>
          <Loader type="Bars" color="#157FFB" height={40} width={40} />
        </div>
      ) : (
        <>
          <SearchForm className={style.searchForm} />
          {userIdList && userIdList.length > 0 ? (
            <table className={cx('table', 'table-hover')}>
              <thead className="bg-light">
                <tr>
                  {tableHeadItems.map((item, index) => (
                    <TableHeadItem
                      key={index}
                      name={item.title}
                      isSortable={item.isSortable}
                      setSortParams={setSortParams}
                      sortParams={sortParams}
                    />
                  ))}
                </tr>
              </thead>
              <tbody>{userIdList && userIdList.map((item, index) => <TableItem key={index} id={item} />)}</tbody>
            </table>
          ) : (
            <div className={cx('text-center', 'h5', 'mb-4')}>No users</div>
          )}

          <Link className={cx('btn', 'btn-primary', 'w-25')} to={'/add-user'}>
            Add user
          </Link>
        </>
      )}
    </PageLayout>
  )
}

export default MainPage
