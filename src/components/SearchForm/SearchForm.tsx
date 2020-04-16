import React, { useCallback } from 'react'
import cx from 'classnames'
import { Filters } from '../../modules/core/types'
import 'rc-slider/assets/index.css'
import 'rc-tooltip/assets/bootstrap.css'
import { Range, createSliderWithTooltip } from 'rc-slider'

type Props = { className?: string; onChange: (filters: Filters) => void; value: Filters }

const SearchForm: React.FC<Props> = ({ className, onChange, value }) => {
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
      console.log(value)
      onChangeFilters({ minAge: value[0], maxAge: value[1] })
    },
    [onChangeFilters]
  )

  const onReset = useCallback(() => {
    onChangeFilters({})
  }, [onChangeFilters])

  return (
    <div className={className}>
      <label htmlFor="search">Search user</label>
      <input
        className="form-control"
        type="text"
        id="search"
        placeholder="Name, surname or email"
        value={value.query}
        onChange={onChangeQuery}
      />
      <Range min={0} max={20} defaultValue={[3, 10]} onChange={(value) => onChangeRange(value)} />
      <button className={cx('btn', 'btn-dark')} onClick={onReset}>
        Reset
      </button>
    </div>
  )
}

export default SearchForm
