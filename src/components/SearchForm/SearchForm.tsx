import React, { useCallback } from 'react'
import cx from 'classnames'
import { Filters } from '../../modules/core/types'
import 'rc-slider/assets/index.css'
import 'rc-tooltip/assets/bootstrap.css'
import { Range, createSliderWithTooltip } from 'rc-slider'
import style from './SearchForm.module.css'

type Props = {
  className?: string
  onChange: (filters: Filters) => void
  onReset: () => void
  value: Filters
}

const SearchForm: React.FC<Props> = ({ className, onChange, onReset, value }) => {
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

  const onResetClick = useCallback(() => {
    onReset()
  }, [onReset])

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
      <Range
        className={cx(style.input, style.range)}
        min={0}
        max={60}
        value={[value.minAge as number, value.maxAge as number]}
        onChange={(value) => onChangeRange(value)}
      />
      <button className={cx('btn', 'btn-dark')} onClick={onResetClick}>
        Reset
      </button>
    </div>
  )
}

export default SearchForm
