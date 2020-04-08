import React, { useMemo } from 'react'
import UserForm from '../UserForm'
import PageLayout from '../PageLayout'
import { User } from '../../modules/core/types'

type Props = {
  editUser: any
  user: User
}

const EditUserPage: React.FC<Props> = ({ editUser, user }) => {
  const breadcrumbs = useMemo(() => {
    return [{ title: 'Edit user' }, { title: `${user.name} ${user.surname}` }]
  }, [user])

  return (
    <PageLayout title={'Edit user'} breadcrumbs={breadcrumbs}>
      <UserForm onSave={editUser} user={user} />
    </PageLayout>
  )
}

export default EditUserPage
