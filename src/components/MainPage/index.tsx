import React from 'react'
import MainPage from './MainPage'
import { useIsLoading, useUserId } from '../../modules/core/hooks'

export default function() {
  const userIdList = useUserId()
  const isLoading = useIsLoading()
  return <MainPage userIdList={userIdList} isLoading={isLoading} />
}
