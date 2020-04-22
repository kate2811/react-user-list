import React, { useEffect } from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import MainPage from '../MainPage'
import AddUserPage from '../AddUserPage'
import EditUserPage from '../EditUserPage'
import { customHistory } from '../../history'
import { useSetFiltersFromUrl, useLoadUserList } from '../../modules/core/hooks'

const App: React.FC = () => {
  let searchParams = new URLSearchParams(window.location.search.slice(1))
  const loadUserList = useLoadUserList()
  const setFiltersFromUrl = useSetFiltersFromUrl()

  useEffect(() => {
    loadUserList()
    setFiltersFromUrl(searchParams)
  }, [loadUserList, setFiltersFromUrl, searchParams])

  return (
    <Router history={customHistory}>
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/add-user">
          <AddUserPage />
        </Route>
        <Route path="/edit-user/:id">
          <EditUserPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
