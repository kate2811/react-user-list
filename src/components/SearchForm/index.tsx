import React from 'react'
import SearchForm from './SearchForm'
import { useFiltersProps, useUsersMinAge, useUsersMaxAge } from '../../modules/core/hooks'

export default function({ className }: { className: string }) {
  const filterProps = useFiltersProps()
  const minAge = useUsersMinAge()
  const maxAge = useUsersMaxAge()
  return (
    <SearchForm
      onChange={filterProps.onChange}
      value={filterProps.value}
      onReset={filterProps.onReset}
      className={className}
      minAge={minAge}
      maxAge={maxAge}
    />
  )
}
