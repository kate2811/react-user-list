import React from 'react'
import MainPage from './MainPage'
import { useIsLoading, useUsersIds } from '../../modules/core/hooks'

export default function() {
  const userIdList = useUsersIds()
  const isLoading = useIsLoading()
  return <MainPage userIdList={userIdList} isLoading={isLoading} />
}
