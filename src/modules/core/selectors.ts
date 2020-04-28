import { createSelector } from 'reselect'
import { isEmpty, max, min, orderBy } from 'lodash'
import { State } from '../../store'

const users = (state: State) => state.core.userList
const filters = (state: State) => state.core.filters
const sortParams = (state: State) => state.core.sortParams
const requiredAge = (state: State) => state.core.requiredAge

const getUsersAges = createSelector(users, (users) => users.map((item) => +item.age))
const getUsersMinAge = createSelector(getUsersAges, (getUsersAges) => min(getUsersAges))
const getUsersMaxAge = createSelector(getUsersAges, (getUsersAges) => max(getUsersAges))

export const getRangeState = createSelector(
  getUsersMinAge,
  getUsersMaxAge,
  requiredAge,
  (getUsersMinAge, getUsersMaxAge, requiredAge) => {
    const range = [getUsersMinAge, getUsersMaxAge]

    if (range[0] && range[1] && range[0] !== range[1]) {
      return { extremValues: range, disable: false }
    }

    return { extremValues: [requiredAge.min, requiredAge.max], disable: true }
  }
)

export const getFilteredUsers = createSelector(users, filters, sortParams, (users, filters, sortParams) => {
  if (!isEmpty(users) && !isEmpty(filters)) {
    if (filters.query) {
      const query = filters.query.toLowerCase()

      users = users.filter(({ name, surname, email }) => {
        return [name, surname, email].map((item) => item.toLowerCase()).some((item) => item.includes(query))
      })
    }

    if (filters.maxAge) {
      users = users.filter((item) => item.age <= (filters.maxAge as number))
    }

    if (filters.minAge) {
      users = users.filter((item) => item.age >= (filters.minAge as number))
    }
  }

  if (!isEmpty(users) && sortParams.direction) {
    const field = sortParams.field
    return orderBy(users, field === 'age' ? 'age' : [field, 'age'], sortParams.direction)
  }

  return users
})

export const getFilteredUsersIds = createSelector(getFilteredUsers, (getFilteredUsers) =>
  getFilteredUsers.map((item: any) => item.id)
)
