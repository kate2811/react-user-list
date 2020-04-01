import React from 'react'
import { useAddUser } from '../../modules/core/hooks'
import UserForm from '../UserForm'
import PageLayout from '../PageLayout'

const AddUserPage: React.FC = () => {
  const addUser = useAddUser()

  return (
    <PageLayout title={'Add user'} breadcrumbs={[{ title: 'Add user'}]}>
      <UserForm onSave={addUser} />
    </PageLayout>
  )
}

export default AddUserPage
