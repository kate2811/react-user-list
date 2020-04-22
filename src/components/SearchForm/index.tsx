import React from 'react'
import SearchForm from './SearchForm'
import { useFiltersProps } from '../../modules/core/hooks'

export default function({ className }: { className: string }) {
  const filterProps = useFiltersProps()
  return (
    <SearchForm
      onChange={filterProps.onChange}
      value={filterProps.value}
      onReset={filterProps.onReset}
      className={className}
    />
  )
}
