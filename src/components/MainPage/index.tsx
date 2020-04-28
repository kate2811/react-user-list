import React from 'react'
import MainPage from './MainPage'
import { useIsLoading, useUsersIds, useSetSortParams, useSortParams } from '../../modules/core/hooks'

export default function() {
  const userIdList = useUsersIds()
  const isLoading = useIsLoading()
  const setSortParams = useSetSortParams()
  const sortParams = useSortParams()
  return (
    <MainPage userIdList={userIdList} isLoading={isLoading} setSortParams={setSortParams} sortParams={sortParams} />
  )
}
