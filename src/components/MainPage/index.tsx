import React from 'react'
import MainPage from './MainPage'
import { useIsLoading, useUsersIds, useFiltersProps } from '../../modules/core/hooks'

export default function() {
  const userIdList = useUsersIds()
  const isLoading = useIsLoading()
  const filterProps = useFiltersProps()
  return <MainPage userIdList={userIdList} isLoading={isLoading} filterProps={filterProps} />
}
