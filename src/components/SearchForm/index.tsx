import React from 'react'
import SearchForm from './SearchForm'
import { useFiltersProps, useRangeState } from '../../modules/core/hooks'

export default function({ className }: { className: string }) {
  const filterProps = useFiltersProps()
  const rangeState = useRangeState()
  return (
    <SearchForm
      onChange={filterProps.onChange}
      value={filterProps.value}
      onReset={filterProps.onReset}
      className={className}
      rangeState={rangeState}
    />
  )
}
