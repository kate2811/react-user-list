import { createSelector } from 'reselect'
import { State } from '../../store'

const users = (state: State) => state.core.userList
const filters = (state: State) => state.core.filters

const getUsersAges = createSelector(users, (users) => users.map((item) => +item.age))

export const getUsersMinAge = createSelector(getUsersAges, (getUsersAges) => Math.min(...getUsersAges))
export const getUsersMaxAge = createSelector(getUsersAges, (getUsersAges) => Math.max(...getUsersAges))

export const getFilteredUsers = createSelector(users, filters, (users, filters) => {
  if (users && Object.keys(filters).length > 0) {
    if (filters.query) {
      const query = filters.query.toLowerCase()
      users = users.filter((item) => {
        return (
          item.name.toLowerCase().includes(query) ||
          item.surname.toLowerCase().includes(query) ||
          item.email.toLowerCase().includes(query)
        )
      })
    }
    if (filters.maxAge) {
      users = users.filter((item) => filters.maxAge && item.age <= filters.maxAge)
    }
    if (filters.minAge) {
      users = users.filter((item) => filters.minAge && item.age >= filters.minAge)
    }
  }
  return users
})

export const getFilteredUsersIds = createSelector(getFilteredUsers, (getFilteredUsers) =>
  getFilteredUsers.map((item) => item.id)
)
