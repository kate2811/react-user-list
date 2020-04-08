import React from 'react'
import UserForm from '../UserForm'
import PageLayout from '../PageLayout'

const breadcrumbs = [{ title: 'Add user' }]

const AddUserPage: React.FC<{ addUser: any }> = ({ addUser }) => {
  return (
    <PageLayout title={'Add user'} breadcrumbs={breadcrumbs}>
      <UserForm onSave={addUser} />
    </PageLayout>
  )
}

export default AddUserPage
