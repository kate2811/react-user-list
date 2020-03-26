import React from 'react'
import { Link } from 'react-router-dom'
import ListItem from './ListItem'
import { useUserId } from '../../modules/core/hooks'

const MainPage: React.FC = () => {
  const userIdList = useUserId()
  return (
    <div>
      <ul>
        {userIdList.map((item, index) => (
          <ListItem key={index} id={item} />
        ))}
      </ul>
      <Link to={'/add-user'}>Add user</Link>
    </div>
  )
}

export default MainPage
