import React from 'react'
import { Link } from 'react-router-dom'
import TableItem from '../TableItem'
import PageLayout from '../PageLayout'
import Loader from 'react-loader-spinner'
import style from './MainPage.module.css'
import cx from 'classnames'
import SearchForm from '../SearchForm'

type Props = {
  isLoading: boolean
  userIdList: string[] | null
}

const MainPage: React.FC<Props> = ({ isLoading, userIdList }) => {
  return (
    <PageLayout title={'User list'}>
      {isLoading ? (
        <div className={cx(style.spinner, 'mx-auto')}>
          <Loader type="Bars" color="#157FFB" height={40} width={40} />
        </div>
      ) : (
        <>
          <SearchForm className={style.searchForm} />
          <table className={cx('table', 'table-hover')}>
            <thead className="bg-light">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Surname</th>
                <th scope="col">Email</th>
                <th scope="col">Age</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>{userIdList && userIdList.map((item, index) => <TableItem key={index} id={item} />)}</tbody>
          </table>
          <Link className={cx('btn', 'btn-primary', 'w-25')} to={'/add-user'}>
            Add user
          </Link>
        </>
      )}
    </PageLayout>
  )
}

export default MainPage
