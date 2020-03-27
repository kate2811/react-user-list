import React from 'react'
import { Link } from 'react-router-dom'
import ListItem from './ListItem'
import { useIsLoading, useUserId } from '../../modules/core/hooks'
import PageLayout from '../PageLayout'
import Loader from 'react-loader-spinner'
import cx from 'classnames'

const MainPage: React.FC = () => {
  const userIdList = useUserId()
  const isLoading = useIsLoading()

  return (
    <PageLayout title={'User list'}>
      {isLoading ? (
        <Loader type="BallTriangle" color="#000000" height={20} width={20} />
      ) : (
        <>
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
            <tbody>
            {userIdList.map((item, index) => (
              <ListItem key={index} id={item} />
            ))}
            </tbody>
          </table>
          <Link className={cx('btn', 'btn-primary', 'w-25')} to={'/add-user'}>Add user</Link>
        </>
      )}
    </PageLayout>
  )
}

export default MainPage
