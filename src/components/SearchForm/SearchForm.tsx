import React, { useCallback } from 'react'
import cx from 'classnames'
import { Filters } from '../../modules/core/types'
import style from './SearchForm.module.css'
import { Slider } from 'antd'

type Props = {
  className?: string
  onChange: (filters: Filters) => void
  onReset: (minAge: number, maxAge: number) => void
  value: Filters
  rangeState: { extremValues: (number | undefined)[]; disable: boolean }
}

const SearchForm: React.FC<Props> = ({ className, onChange, onReset, value, rangeState }) => {
  const onChangeFilters = useCallback(
    (filter) => {
      onChange(Object.assign({}, value, filter))
    },
    [onChange, value]
  )

  const onChangeQuery = useCallback(
    (event) => {
      onChangeFilters({ query: event.target.value })
    },
    [onChangeFilters]
  )

  const onChangeRange = useCallback(
    (value) => {
      onChangeFilters({ minAge: value[0], maxAge: value[1] })
    },
    [onChangeFilters]
  )

  return (
    <div className={className}>
      <label htmlFor="search">Search user</label>
      <input
        className={cx('form-control', style.input)}
        type="text"
        id="search"
        placeholder="Name, surname or email"
        value={value.query}
        onChange={onChangeQuery}
      />
      <Slider
        range
        min={rangeState.extremValues[0]}
        max={rangeState.extremValues[1]}
        value={[value.minAge as number, value.maxAge as number]}
        onChange={onChangeRange}
        disabled={rangeState.disable}
      />
      <button
        className={cx('btn', 'btn-dark')}
        onClick={() => onReset(rangeState.extremValues[0] as number, rangeState.extremValues[1] as number)}
      >
        Reset
      </button>
    </div>
  )
}

export default SearchForm
